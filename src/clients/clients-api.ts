import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
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
   * @summary Create a Client
   * @param {CreateClientRequest} createClientRequest Request Body
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public createClient(
    createClientRequest: CreateClientRequest
  ): Promise<MonoCloudResponse<Client>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/v1/clients`;

    request.url = url;

    request.data = JSON.stringify(createClientRequest);

    return this.processRequest<Client>(request);
  }

  /**
   *
   * @summary Create a Client Secret
   * @param {string} clientId Client Id
   * @param {CreateSecretRequest} createSecretRequest Request Body
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public createClientSecret(
    clientId: string,
    createSecretRequest: CreateSecretRequest
  ): Promise<MonoCloudResponse<Secret>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/v1/clients/{clientId}/secrets`.replace(
      `{${'clientId'}}`,
      encodeURIComponent(String(clientId))
    );

    request.url = url;

    request.data = JSON.stringify(createSecretRequest);

    return this.processRequest<Secret>(request);
  }

  /**
   *
   * @summary Delete a Client
   * @param {string} id Client Id
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public deleteClient(id: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/v1/clients/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Delete a Client Secret
   * @param {string} clientId Client Id
   * @param {string} secretId Secret Id
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public deleteClientSecret(
    clientId: string,
    secretId: string
  ): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/v1/clients/{clientId}/secrets/{secretId}`
      .replace(`{${'clientId'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'secretId'}}`, encodeURIComponent(String(secretId)));

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Find a Client by Id
   * @param {string} id Client Id
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public findClientById(id: string): Promise<MonoCloudResponse<Client>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/clients/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<Client>(request);
  }

  /**
   *
   * @summary Find a Client Secret by Id
   * @param {string} clientId Client Id
   * @param {string} secretId Secret Id
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public findClientSecretById(
    clientId: string,
    secretId: string
  ): Promise<MonoCloudResponse<SecretValue>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/clients/{clientId}/secrets/{secretId}`
      .replace(`{${'clientId'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'secretId'}}`, encodeURIComponent(String(secretId)));

    request.url = url;

    return this.processRequest<SecretValue>(request);
  }

  /**
   *
   * @summary Get all the Clients
   * @param {number} [page]
   * @param {number} [size]
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public getAllClients(
    page?: number,
    size?: number
  ): Promise<MonoCloudResponse<Array<Client>>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/clients`;

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    return this.processRequest<Array<Client>>(request);
  }

  /**
   *
   * @summary Update a Client
   * @param {string} id Client Id
   * @param {PatchClientRequest} patchClientRequest Request Body
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   *
   */
  public patchClient(
    id: string,
    patchClientRequest: PatchClientRequest
  ): Promise<MonoCloudResponse<Client>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/v1/clients/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    request.data = JSON.stringify(patchClientRequest);

    return this.processRequest<Client>(request);
  }
}
