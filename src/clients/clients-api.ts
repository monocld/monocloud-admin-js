import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import {
  Client,
  CreateClientRequest,
  CreateSecretRequest,
  PatchClientRequest,
  Secret,
  SecretValue,
} from '../models';

export class ClientsClient extends MonoCloudClientBase {
  /**
   *
   * @summary Find a Client by Id
   * @param {string} id Client Id
   * @returns Client - Success
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public findClientById(id: string): Promise<MonoCloudResponse<Client>> {
    const url = `/clients/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Client>(request);
  }

  /**
   *
   * @summary Delete a Client
   * @param {string} id Client Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public deleteClient(id: string): Promise<MonoCloudResponse<null>> {
    const url = `/clients/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Update a Client
   * @param {string} id Client Id
   * @param {PatchClientRequest} patchClientRequest Request Body
   * @returns Client - Success
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public patchClient(
    id: string,
    patchClientRequest: PatchClientRequest
  ): Promise<MonoCloudResponse<Client>> {
    const url = `/clients/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchClientRequest;

    return this.processRequest<Client>(request);
  }

  /**
   *
   * @summary Find a Client Secret by Id
   * @param {string} clientId Client Id
   * @param {string} secretId Secret Id
   * @returns SecretValue - Success
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public findClientSecretById(
    clientId: string,
    secretId: string
  ): Promise<MonoCloudResponse<SecretValue>> {
    const url = `/clients/{client_id}/secrets/{secret_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<SecretValue>(request);
  }

  /**
   *
   * @summary Delete a Client Secret
   * @param {string} clientId Client Id
   * @param {string} secretId Secret Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public deleteClientSecret(
    clientId: string,
    secretId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/clients/{client_id}/secrets/{secret_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Get all the Clients
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the clients needs to be filtered.
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'client_name\', and \'creation_time\'
   * @returns Client[] - Success
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public getAllClients(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<Client[]>> {
    const url = `/clients`;

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<Client[]>(request);
  }

  /**
   *
   * @summary Create a Client
   * @param {CreateClientRequest} createClientRequest Request Body
   * @returns Client - Created
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public createClient(
    createClientRequest: CreateClientRequest
  ): Promise<MonoCloudResponse<Client>> {
    const url = `/clients`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createClientRequest;

    return this.processRequest<Client>(request);
  }

  /**
   *
   * @summary Create a Client Secret
   * @param {string} clientId Client Id
   * @param {CreateSecretRequest} createSecretRequest Request Body
   * @returns Secret - Created
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public createClientSecret(
    clientId: string,
    createSecretRequest: CreateSecretRequest
  ): Promise<MonoCloudResponse<Secret>> {
    const url = `/clients/{client_id}/secrets`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createSecretRequest;

    return this.processRequest<Secret>(request);
  }
}
