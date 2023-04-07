import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import {
  ApiResource,
  ApiScope,
  ClaimResource,
  CreateApiResourceRequest,
  CreateApiScopeRequest,
  CreateClaimResourceRequest,
  CreateScopeRequest,
  CreateSecretRequest,
  PatchApiResourceRequest,
  PatchApiScopeRequest,
  PatchClaimResourceRequest,
  PatchScopeRequest,
  Scope,
  Secret,
  SecretValue,
} from '../models';

export class ResourcesClient extends MonoCloudClientBase {
  /**
   *
   * @summary Create an Api Resource
   * @param {CreateApiResourceRequest} createApiResourceRequest Request Body
   * @returns ApiResource - Created
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public createApiResource(
    createApiResourceRequest: CreateApiResourceRequest
  ): Promise<MonoCloudResponse<ApiResource>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/resources/apiresources`;

    request.url = url;

    request.data = JSON.stringify(createApiResourceRequest);

    return this.processRequest<ApiResource>(request);
  }

  /**
   *
   * @summary Create an Api Resource Secret
   * @param {string} resourceId Resource Id
   * @param {CreateSecretRequest} createSecretRequest Request Body
   * @returns Secret - Created
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public createApiResourceSecret(
    resourceId: string,
    createSecretRequest: CreateSecretRequest
  ): Promise<MonoCloudResponse<Secret>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/resources/apiresources/{resourceId}/secrets`.replace(
      `{${'resourceId'}}`,
      encodeURIComponent(String(resourceId))
    );

    request.url = url;

    request.data = JSON.stringify(createSecretRequest);

    return this.processRequest<Secret>(request);
  }

  /**
   *
   * @summary Create an Api Scope
   * @param {CreateApiScopeRequest} createApiScopeRequest Request Body
   * @returns ApiScope - Created
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public createApiScope(
    createApiScopeRequest: CreateApiScopeRequest
  ): Promise<MonoCloudResponse<ApiScope>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/resources/apiscopes`;

    request.url = url;

    request.data = JSON.stringify(createApiScopeRequest);

    return this.processRequest<ApiScope>(request);
  }

  /**
   *
   * @summary Create an Claim Resource
   * @param {CreateClaimResourceRequest} createClaimResourceRequest Request Body
   * @returns ClaimResource - Created
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public createClaimResource(
    createClaimResourceRequest: CreateClaimResourceRequest
  ): Promise<MonoCloudResponse<ClaimResource>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/resources/claimresources`;

    request.url = url;

    request.data = JSON.stringify(createClaimResourceRequest);

    return this.processRequest<ClaimResource>(request);
  }

  /**
   *
   * @summary Create a Scope
   * @param {CreateScopeRequest} createScopeRequest Request Body
   * @returns Scope - Created
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public createScope(
    createScopeRequest: CreateScopeRequest
  ): Promise<MonoCloudResponse<Scope>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/resources/scopes`;

    request.url = url;

    request.data = JSON.stringify(createScopeRequest);

    return this.processRequest<Scope>(request);
  }

  /**
   *
   * @summary Delete an Api Resource
   * @param {string} id Api Resource Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteApiResource(id: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/resources/apiresources/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Delete an Api Resource Secret
   * @param {string} resourceId ResourceId Id
   * @param {string} secretId Secret Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteApiResourceSecret(
    resourceId: string,
    secretId: string
  ): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/resources/apiresources/{resourceId}/secrets/{secretId}`
      .replace(`{${'resourceId'}}`, encodeURIComponent(String(resourceId)))
      .replace(`{${'secretId'}}`, encodeURIComponent(String(secretId)));

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Delete an Api Scope
   * @param {string} id Api Scope Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteApiScope(id: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/resources/apiscopes/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Delete an Claim Resource
   * @param {string} id Claim Resource Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteClaimResource(id: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/resources/claimresources/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Delete a Scope
   * @param {string} id Scope Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteScope(id: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/resources/scopes/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Find an Api Resource by Id
   * @param {string} id Api Resource Id
   * @returns ApiResource - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findApiResourceById(
    id: string
  ): Promise<MonoCloudResponse<ApiResource>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/apiresources/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<ApiResource>(request);
  }

  /**
   *
   * @summary Find an Api Resource Secret by Id
   * @param {string} resourceId Resource Id
   * @param {string} secretId Secret Id
   * @returns SecretValue - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findApiResourceSecretById(
    resourceId: string,
    secretId: string
  ): Promise<MonoCloudResponse<SecretValue>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/apiresources/{resourceId}/secrets/{secretId}`
      .replace(`{${'resourceId'}}`, encodeURIComponent(String(resourceId)))
      .replace(`{${'secretId'}}`, encodeURIComponent(String(secretId)));

    request.url = url;

    return this.processRequest<SecretValue>(request);
  }

  /**
   *
   * @summary Find an Api Scope by Id
   * @param {string} id Api Scope Id
   * @returns ApiScope - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findApiScopeById(id: string): Promise<MonoCloudResponse<ApiScope>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/apiscopes/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<ApiScope>(request);
  }

  /**
   *
   * @summary Find an Claim Resource by Id
   * @param {string} id Claim Resource Id
   * @returns ClaimResource - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findClaimResourceById(
    id: string
  ): Promise<MonoCloudResponse<ClaimResource>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/claimresources/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<ClaimResource>(request);
  }

  /**
   *
   * @summary Find a Scope by Id
   * @param {string} id Scope Id
   * @returns Scope - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findScopeById(id: string): Promise<MonoCloudResponse<Scope>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/scopes/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<Scope>(request);
  }

  /**
   *
   * @summary Get all the Api Resources
   * @param {number} [page]
   * @param {number} [size]
   * @returns ApiResource[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllApiResources(
    page?: number,
    size?: number
  ): Promise<MonoCloudResponse<ApiResource[]>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/apiresources`;

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    return this.processRequest<ApiResource[]>(request);
  }

  /**
   *
   * @summary Get all the Api Scopes
   * @param {number} [page]
   * @param {number} [size]
   * @returns ApiScope[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllApiScopes(
    page?: number,
    size?: number
  ): Promise<MonoCloudResponse<ApiScope[]>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/apiscopes`;

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    return this.processRequest<ApiScope[]>(request);
  }

  /**
   *
   * @summary Get all the Claim Resources
   * @param {number} [page]
   * @param {number} [size]
   * @returns ClaimResource[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllClaimResources(
    page?: number,
    size?: number
  ): Promise<MonoCloudResponse<ClaimResource[]>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/claimresources`;

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    return this.processRequest<ClaimResource[]>(request);
  }

  /**
   *
   * @summary Get all the Scopes
   * @param {number} [page]
   * @param {number} [size]
   * @returns Scope[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllScopes(
    page?: number,
    size?: number
  ): Promise<MonoCloudResponse<Scope[]>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/scopes`;

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    return this.processRequest<Scope[]>(request);
  }

  /**
   *
   * @summary Update an Api Resource
   * @param {string} id Api Resource Id
   * @param {PatchApiResourceRequest} patchApiResourceRequest Request Body
   * @returns ApiResource - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public patchApiResource(
    id: string,
    patchApiResourceRequest: PatchApiResourceRequest
  ): Promise<MonoCloudResponse<ApiResource>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/resources/apiresources/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    request.data = JSON.stringify(patchApiResourceRequest);

    return this.processRequest<ApiResource>(request);
  }

  /**
   *
   * @summary Update an Api Scope
   * @param {string} id Api Scope Id
   * @param {PatchApiScopeRequest} patchApiScopeRequest Request Body
   * @returns ApiScope - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public patchApiScope(
    id: string,
    patchApiScopeRequest: PatchApiScopeRequest
  ): Promise<MonoCloudResponse<ApiScope>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/resources/apiscopes/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    request.data = JSON.stringify(patchApiScopeRequest);

    return this.processRequest<ApiScope>(request);
  }

  /**
   *
   * @summary Update an Claim Resource
   * @param {string} id Claim Resource Id
   * @param {PatchClaimResourceRequest} patchClaimResourceRequest Request Body
   * @returns ClaimResource - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public patchClaimResource(
    id: string,
    patchClaimResourceRequest: PatchClaimResourceRequest
  ): Promise<MonoCloudResponse<ClaimResource>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/resources/claimresources/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    request.data = JSON.stringify(patchClaimResourceRequest);

    return this.processRequest<ClaimResource>(request);
  }

  /**
   *
   * @summary Update a Scope
   * @param {string} id Scope Id
   * @param {PatchScopeRequest} patchScopeRequest Request Body
   * @returns Scope - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public patchScope(
    id: string,
    patchScopeRequest: PatchScopeRequest
  ): Promise<MonoCloudResponse<Scope>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/resources/scopes/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    request.data = JSON.stringify(patchScopeRequest);

    return this.processRequest<Scope>(request);
  }
}
