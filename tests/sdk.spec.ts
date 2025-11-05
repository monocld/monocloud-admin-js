/* eslint-disable @typescript-eslint/no-non-null-assertion */
import nock from 'nock';
import {
  MonoCloudAdminClient,
  MonoCloudBadRequestException,
  MonoCloudErrorCodeValidationException,
  MonoCloudKeyValidationException,
  MonoCloudServerException,
  CreateClientRequest,
  RefreshTokenExpirationTypes,
} from '../src';

describe('MonoCloud Admin SDK Tests', () => {
  let client: MonoCloudAdminClient;
  let nockInst: nock.Scope;

  beforeEach(() => {
    client = MonoCloudAdminClient.init({
      domain: 'example.com',
      apiKey: 'someKey',
    });
    nockInst = nock('https://example.com');
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('Create should only send set fields', async () => {
    nockInst.post('/api/clients', { client_name: 'client' }).reply(201, {});

    await client.clients.createClient({
      client_name: 'client',
    } as CreateClientRequest);

    nockInst.done();
  });

  test('Create should send correct enum', async () => {
    nockInst
      .post('/api/clients', {
        refresh_token_expiration: 'absolute',
      })
      .reply(201, {});

    await client.clients.createClient({
      refresh_token_expiration: RefreshTokenExpirationTypes.Absolute,
    } as CreateClientRequest);

    nockInst.done();
  });

  test('Patch should only send set fields', async () => {
    nockInst
      .patch('/api/clients/client', {
        client_name: '1234',
      })
      .reply(200, {});

    await client.clients.patchClient('client', {
      client_name: '1234',
    });

    nockInst.done();
  });

  test('Patch should send null fields when set', async () => {
    nockInst
      .patch('/api/clients/client', {
        client_name: null,
      })
      .reply(200, {});

    await client.clients.patchClient('client', {
      client_name: null as unknown as string,
    });

    nockInst.done();
  });

  test('Get should receive correct nullable datetime', async () => {
    nockInst.get('/api/clients/client').reply(200, { last_updated: null });

    const result = await client.clients.findClientById('client');

    expect(result.result.last_updated).toBeNull();
  });

  test('Get with paging should receive correct result', async () => {
    nockInst.get('/api/clients').reply(200, [{}, {}], {
      'x-Pagination':
        '{"total_count":20,"page_size":2,"current_page":3,"has_next":true,"has_previous":true}',
    });

    const result = await client.clients.getAllClients();

    expect(result.result.length).toBe(2);
    expect(result.pageData.total_count).toBe(20);
    expect(result.pageData.page_size).toBe(2);
    expect(result.pageData.current_page).toBe(3);
    expect(result.pageData.has_next).toBe(true);
    expect(result.pageData.has_previous).toBe(true);
  });

  test('Get with paging should handle no pagination header', async () => {
    nockInst.get('/api/clients').reply(200, [{}, {}]);

    const result = await client.clients.getAllClients();
    expect(result.result.length).toBe(2);
    expect(result.pageData.total_count).toBe(0);
    expect(result.pageData.page_size).toBe(0);
    expect(result.pageData.current_page).toBe(0);
    expect(result.pageData.has_next).toBe(false);
    expect(result.pageData.has_previous).toBe(false);
  });

  test('Identity error should handle correctly', async () => {
    nockInst.post('/api/clients').reply(
      422,
      {
        type: 'https://httpstatuses.io/422#identity-validation-error',
        title: 'Unprocessable Entity',
        status: 422,
        errors: [
          {
            code: 'PasswordTooShort',
            description: 'Passwords must be at least 8 characters.',
          },
          {
            code: 'PasswordRequiresNonAlphanumeric',
            description:
              'Passwords must have at least one non alphanumeric character.',
          },
          {
            code: 'PasswordRequiresUpper',
            description:
              "Passwords must have at least one uppercase ('A'-'Z').",
            field: 'password',
          },
        ],
        traceId: '00-cd3f24e893675e2dae242875e99e7c85-296286fe1c04c085-01',
      },
      { 'Content-Type': 'application/problem+json' }
    );

    try {
      await client.clients.createClient({} as any);
      throw new Error('Invalid');
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(MonoCloudErrorCodeValidationException);
      const err = error as MonoCloudErrorCodeValidationException;
      expect(err.message).toContain('Unprocessable Entity');
      expect(err.errors.length).toBe(3);
      expect(err.errors[0].code).toBe('PasswordTooShort');
      expect(err.errors[0].description).toBe(
        'Passwords must be at least 8 characters.'
      );
      expect(err.errors[0].field).toBeUndefined();
      expect(err.errors[1].code).toBe('PasswordRequiresNonAlphanumeric');
      expect(err.errors[1].description).toBe(
        'Passwords must have at least one non alphanumeric character.'
      );
      expect(err.errors[1].field).toBeUndefined();
      expect(err.errors[2].code).toBe('PasswordRequiresUpper');
      expect(err.errors[2].description).toBe(
        "Passwords must have at least one uppercase ('A'-'Z')."
      );
      expect(err.errors[2].field).toBe('password');
      expect(err.response).not.toBeFalsy();
      expect(err.response!.type).toBe(
        'https://httpstatuses.io/422#identity-validation-error'
      );
      expect(err.response!.title).toBe('Unprocessable Entity');
      expect(err.response!.status).toBe(422);
      expect(err.response!.traceId).toBe(
        '00-cd3f24e893675e2dae242875e99e7c85-296286fe1c04c085-01'
      );
    }
  });

  test('Key validation error should handle correctly', async () => {
    nockInst.post('/api/clients').reply(
      422,
      {
        type: 'https://httpstatuses.io/422#validation-error',
        title: 'Unprocessable Entity',
        status: 422,
        errors: {
          client_name: ['should not be empty'],
          description: ['should not be more than 200 characters'],
        },
        traceId: '00-cd3f24e893675e2dae242875e99e7c85-296286fe1c04c085-01',
      },
      { 'Content-Type': 'application/problem+json' }
    );

    try {
      await client.clients.createClient({} as CreateClientRequest);
      throw new Error('Invalid');
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(MonoCloudKeyValidationException);
      const err = error as MonoCloudKeyValidationException;
      expect(err.message).toContain('Unprocessable Entity');
      expect(Object.keys(err.errors).length).toBe(2);
      expect(err.errors.client_name?.[0]).toBe('should not be empty');
      expect(err.errors.description?.[0]).toBe(
        'should not be more than 200 characters'
      );
      expect(err.response).not.toBeFalsy();
      expect(err.response!.type).toBe(
        'https://httpstatuses.io/422#validation-error'
      );
      expect(err.response!.status).toBe(422);
      expect(err.response!.title).toBe('Unprocessable Entity');
      expect(err.response!.traceId).toBe(
        '00-cd3f24e893675e2dae242875e99e7c85-296286fe1c04c085-01'
      );
    }
  });

  test('Internal server error should handle correctly', async () => {
    nockInst.post('/api/clients').reply(
      500,
      {
        type: 'https://httpstatuses.io/500',
        title: 'Internal Server Error',
        status: 500,
        detail: 'Internal Server Error Detail',
        traceId: '00-b2ceddefca0cf958ed678f144872e3c7-d0b2da5c8fe32598-01',
      },
      { 'Content-Type': 'application/problem+json' }
    );

    try {
      await client.clients.createClient({} as CreateClientRequest);
      throw new Error('Invalid');
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(MonoCloudServerException);
      const err = error as MonoCloudServerException;
      expect(err.message).toBe('Internal Server Error');
      expect(err.response).not.toBeFalsy();
      expect(err.response!.type).toBe('https://httpstatuses.io/500');
      expect(err.response!.title).toBe('Internal Server Error');
      expect(err.response!.status).toBe(500);
      expect(err.response!.detail).toBe('Internal Server Error Detail');
      expect(err.response!.traceId).toBe(
        '00-b2ceddefca0cf958ed678f144872e3c7-d0b2da5c8fe32598-01'
      );
    }
  });

  test('Bad request error should handle correctly', async () => {
    nockInst.post('/api/clients').reply(
      400,
      {
        type: 'https://httpstatuses.io/400',
        title: 'Bad Request',
        status: 400,
        detail: 'Bad Request Detail',
        traceId: '00-2e0cd141be28223b233dd3907cbe58b4-2ba9f9375b4b78e0-01',
      },
      { 'Content-Type': 'application/problem+json' }
    );

    try {
      await client.clients.createClient({} as CreateClientRequest);
      throw new Error('Invalid');
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(MonoCloudBadRequestException);
      const err = error as MonoCloudBadRequestException;
      expect(err.message).toBe('Bad Request');
      expect(err.response).not.toBeFalsy();
      expect(err.response!.type).toBe('https://httpstatuses.io/400');
      expect(err.response!.title).toBe('Bad Request');
      expect(err.response!.status).toBe(400);
      expect(err.response!.detail).toBe('Bad Request Detail');
      expect(err.response!.traceId).toBe(
        '00-2e0cd141be28223b233dd3907cbe58b4-2ba9f9375b4b78e0-01'
      );
    }
  });

  test('No content should handle correctly', async () => {
    nockInst
      .delete('/api/clients/1')
      .reply(204, {}, { 'Content-Type': 'application/json' });

    const result = await client.clients.deleteClient('1');

    nockInst.done();

    expect(result.status).toBe(204);
  });

  test('Empty body should handle correctly', async () => {
    nockInst.post('/api/clients', { client_name: 'client' }).reply(201);

    const result = await client.clients.createClient({
      client_name: 'client',
    } as CreateClientRequest);

    nockInst.done();

    expect(result.status).toBe(201);
    expect(result.result).toBeNull();
  });
});
