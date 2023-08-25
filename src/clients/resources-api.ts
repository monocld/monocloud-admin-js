import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import {
  ApiResource,
  ApiScope,
  ClaimResource,
  CreateApiResourceRequest,
  CreateApiScopeRequest,
  CreateClaimResourceRequest,
  CreateIdentityResourceRequest,
  CreateSecretRequest,
  IdentityResource,
  PatchApiResourceRequest,
  PatchApiScopeRequest,
  PatchClaimResourceRequest,
  PatchIdentityResourceRequest,
  Secret,
  SecretValue,
} from '../models';

export class ResourcesClient extends MonoCloudClientBase {
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

    const url = `/resources/apiresources/{resource_id}/secrets/{secret_id}`
      .replace(`{${'resource_id'}}`, encodeURIComponent(String(resourceId)))
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)));

    request.url = url;

    return this.processRequest<SecretValue>(request);
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

    const url = `/resources/apiresources/{resource_id}/secrets/{secret_id}`
      .replace(`{${'resource_id'}}`, encodeURIComponent(String(resourceId)))
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)));

    request.url = url;

    return this.processRequest<null>(request);
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
   * @summary Find an Identity Resource by Id
   * @param {string} id Identity Resource Id
   * @returns IdentityResource - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findIdentityResourceById(
    id: string
  ): Promise<MonoCloudResponse<IdentityResource>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/identityresources/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<IdentityResource>(request);
  }

  /**
   *
   * @summary Delete an Identity Resource
   * @param {string} id Identity Resource Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteIdentityResource(id: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/resources/identityresources/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Update an Identity Resource
   * @param {string} id Identity Resource Id
   * @param {PatchIdentityResourceRequest} patchIdentityResourceRequest Request Body
   * @returns IdentityResource - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public patchIdentityResource(
    id: string,
    patchIdentityResourceRequest: PatchIdentityResourceRequest
  ): Promise<MonoCloudResponse<IdentityResource>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/resources/identityresources/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    request.data = JSON.stringify(patchIdentityResourceRequest);

    return this.processRequest<IdentityResource>(request);
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
   * @summary Get all the Api Resources
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the resources needs to be filtered.
   * @param {string} [sort] Value by results will be sorted.
   * @returns ApiResource[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllApiResources(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
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

    if (filter !== undefined && filter !== null) {
      request.params.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.params.sort = String(sort);
    }

    return this.processRequest<ApiResource[]>(request);
  }

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
   * @summary Get all the Api Scopes
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the resources needs to be filtered.
   * @param {string} [sort] Value by results will be sorted.
   * @returns ApiScope[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllApiScopes(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
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

    if (filter !== undefined && filter !== null) {
      request.params.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.params.sort = String(sort);
    }

    return this.processRequest<ApiScope[]>(request);
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
   * @summary Get all the Identity Resources
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the resources needs to be filtered.
   * @param {string} [sort] Value by results will be sorted.
   * @returns IdentityResource[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllIdentityResources(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudResponse<IdentityResource[]>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/resources/identityresources`;

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.params.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.params.sort = String(sort);
    }

    return this.processRequest<IdentityResource[]>(request);
  }

  /**
   *
   * @summary Create an Identity Resource
   * @param {CreateIdentityResourceRequest} createIdentityResourceRequest Request Body
   * @returns IdentityResource - Created
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public createIdentityResource(
    createIdentityResourceRequest: CreateIdentityResourceRequest
  ): Promise<MonoCloudResponse<IdentityResource>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/resources/identityresources`;

    request.url = url;

    request.data = JSON.stringify(createIdentityResourceRequest);

    return this.processRequest<IdentityResource>(request);
  }

  /**
   *
   * @summary Get all the Claim Resources
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the resources needs to be filtered.
   * @param {string} [sort] Value by results will be sorted.
   * @returns ClaimResource[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllClaimResources(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
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

    if (filter !== undefined && filter !== null) {
      request.params.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.params.sort = String(sort);
    }

    return this.processRequest<ClaimResource[]>(request);
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

    const url = `/resources/apiresources/{resource_id}/secrets`.replace(
      `{${'resource_id'}}`,
      encodeURIComponent(String(resourceId))
    );

    request.url = url;

    request.data = JSON.stringify(createSecretRequest);

    return this.processRequest<Secret>(request);
  }
}
