import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import {
  ApiResource,
  ApiResourceClient,
  ApiScope,
  ClaimResource,
  CreateApiResourceClientRequest,
  CreateApiResourceRequest,
  CreateApiScopeRequest,
  CreateClaimResourceRequest,
  CreateScopeRequest,
  CreateSecretRequest,
  PatchApiResourceClientRequest,
  PatchApiResourceRequest,
  PatchApiScopeRequest,
  PatchClaimResourceRequest,
  PatchScopeRequest,
  Scope,
  Secret,
} from '../models';

export class ResourcesClient extends MonoCloudClientBase {
  /**
   *
   * @summary Find an Api Resource by Id
   * @param {string} apiId API Id
   * @returns ApiResource - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findApiResourceById(
    apiId: string
  ): Promise<MonoCloudResponse<ApiResource>> {
    const url = `/resources/api_resources/{api_id}`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ApiResource>(request);
  }

  /**
   *
   * @summary Delete an Api Resource
   * @param {string} apiId API Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteApiResource(apiId: string): Promise<MonoCloudResponse<null>> {
    const url = `/resources/api_resources/{api_id}`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Update an Api Resource
   * @param {string} apiId API Id
   * @param {PatchApiResourceRequest} patchApiResourceRequest Request Body
   * @returns ApiResource - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public patchApiResource(
    apiId: string,
    patchApiResourceRequest: PatchApiResourceRequest
  ): Promise<MonoCloudResponse<ApiResource>> {
    const url = `/resources/api_resources/{api_id}`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchApiResourceRequest;

    return this.processRequest<ApiResource>(request);
  }

  /**
   *
   * @summary Gets all Api Resource Secrets
   * @param {string} apiId API Id
   * @returns Secret[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllApiResourceSecrets(
    apiId: string
  ): Promise<MonoCloudResponse<Secret[]>> {
    const url = `/resources/api_resources/{api_id}/secrets`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Secret[]>(request);
  }

  /**
   *
   * @summary Create an Api Resource Secret
   * @param {string} apiId API Id
   * @param {CreateSecretRequest} createSecretRequest Request Body
   * @returns Secret - Created
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public createApiResourceSecret(
    apiId: string,
    createSecretRequest: CreateSecretRequest
  ): Promise<MonoCloudResponse<Secret>> {
    const url = `/resources/api_resources/{api_id}/secrets`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createSecretRequest;

    return this.processRequest<Secret>(request);
  }

  /**
   *
   * @summary Find an Api Resource Secret by Id
   * @param {string} secretId Secret Id
   * @param {string} apiId API Id
   * @returns Secret - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findApiResourceSecretById(
    secretId: string,
    apiId: string
  ): Promise<MonoCloudResponse<Secret>> {
    const url = `/resources/api_resources/{api_id}/secrets/{secret_id}`
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)))
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Secret>(request);
  }

  /**
   *
   * @summary Delete an Api Resource Secret
   * @param {string} apiId API Id
   * @param {string} secretId Secret Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteApiResourceSecret(
    apiId: string,
    secretId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/resources/api_resources/{api_id}/secrets/{secret_id}`
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)))
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Get all the Api Scopes
   * @param {string} apiId API Id
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the resources needs to be filtered.
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'name\', \'display_name\', \'description\', and \'creation_time\'
   * @returns ApiScope[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllApiScopes(
    apiId: string,
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<ApiScope[]>> {
    const url = `/resources/api_resources/{api_id}/scopes`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

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

    return this.processPaginatedRequest<ApiScope[]>(request);
  }

  /**
   *
   * @summary Create an Api Scope
   * @param {string} apiId API Id
   * @param {CreateApiScopeRequest} createApiScopeRequest Request Body
   * @returns ApiScope - Created
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public createApiScope(
    apiId: string,
    createApiScopeRequest: CreateApiScopeRequest
  ): Promise<MonoCloudResponse<ApiScope>> {
    const url = `/resources/api_resources/{api_id}/scopes`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createApiScopeRequest;

    return this.processRequest<ApiScope>(request);
  }

  /**
   *
   * @summary Find an Api Scope by Id
   * @param {string} scopeId Scope Id
   * @param {string} apiId API Id
   * @returns ApiScope - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findApiScopeById(
    scopeId: string,
    apiId: string
  ): Promise<MonoCloudResponse<ApiScope>> {
    const url = `/resources/api_resources/{api_id}/scopes/{scope_id}`
      .replace(`{${'scope_id'}}`, encodeURIComponent(String(scopeId)))
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ApiScope>(request);
  }

  /**
   *
   * @summary Delete an Api Scope
   * @param {string} scopeId Scope Id
   * @param {string} apiId API Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteApiScope(
    scopeId: string,
    apiId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/resources/api_resources/{api_id}/scopes/{scope_id}`
      .replace(`{${'scope_id'}}`, encodeURIComponent(String(scopeId)))
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Update an Api Scope
   * @param {string} scopeId Scope Id
   * @param {string} apiId API Id
   * @param {PatchApiScopeRequest} patchApiScopeRequest Request Body
   * @returns ApiScope - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public patchApiScope(
    scopeId: string,
    apiId: string,
    patchApiScopeRequest: PatchApiScopeRequest
  ): Promise<MonoCloudResponse<ApiScope>> {
    const url = `/resources/api_resources/{api_id}/scopes/{scope_id}`
      .replace(`{${'scope_id'}}`, encodeURIComponent(String(scopeId)))
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)));

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchApiScopeRequest;

    return this.processRequest<ApiScope>(request);
  }

  /**
   *
   * @summary Get all the Client Api Resource Associations
   * @param {string} clientId Client Id
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'client_id\', \'creation_time\' and \'last_updated\'
   * @returns ApiResourceClient[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllClientApiResources(
    clientId: string,
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<ApiResourceClient[]>> {
    const url = `/resources/api_resources/clients/{client_id}`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<ApiResourceClient[]>(request);
  }

  /**
   *
   * @summary Get all the Api Resource Client Associations
   * @param {string} apiId API Id
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'client_id\', \'creation_time\' and \'last_updated\'
   * @returns ApiResourceClient[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllApiResourceClients(
    apiId: string,
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<ApiResourceClient[]>> {
    const url = `/resources/api_resources/{api_id}/clients`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<ApiResourceClient[]>(request);
  }

  /**
   *
   * @summary Find an Api Resource Client Association
   * @param {string} apiId API Id
   * @param {string} clientId Client Id
   * @returns ApiResourceClient - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findApiResourceClient(
    apiId: string,
    clientId: string
  ): Promise<MonoCloudResponse<ApiResourceClient>> {
    const url = `/resources/api_resources/{api_id}/clients/{client_id}`
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)))
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ApiResourceClient>(request);
  }

  /**
   *
   * @summary Create an Api Resource Client Association
   * @param {string} apiId API Id
   * @param {string} clientId Client Id
   * @param {CreateApiResourceClientRequest} createApiResourceClientRequest Request Body
   * @returns ApiResourceClient - Created
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public createApiResourceClient(
    apiId: string,
    clientId: string,
    createApiResourceClientRequest: CreateApiResourceClientRequest
  ): Promise<MonoCloudResponse<ApiResourceClient>> {
    const url = `/resources/api_resources/{api_id}/clients/{client_id}`
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)))
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)));

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createApiResourceClientRequest;

    return this.processRequest<ApiResourceClient>(request);
  }

  /**
   *
   * @summary Remove an Api Resource Client Association
   * @param {string} apiId API Id
   * @param {string} clientId Client Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public removeApiResourceClient(
    apiId: string,
    clientId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/resources/api_resources/{api_id}/clients/{client_id}`
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)))
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Update an Api Resource Client Association
   * @param {string} apiId API Id
   * @param {string} clientId Client Id
   * @param {PatchApiResourceClientRequest} patchApiResourceClientRequest Request Body
   * @returns ApiResourceClient - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public patchApiResourceClient(
    apiId: string,
    clientId: string,
    patchApiResourceClientRequest: PatchApiResourceClientRequest
  ): Promise<MonoCloudResponse<ApiResourceClient>> {
    const url = `/resources/api_resources/{api_id}/clients/{client_id}`
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)))
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)));

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchApiResourceClientRequest;

    return this.processRequest<ApiResourceClient>(request);
  }

  /**
   *
   * @summary Find a Scope by Id
   * @param {string} scopeId Scope Id
   * @returns Scope - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findScopeById(scopeId: string): Promise<MonoCloudResponse<Scope>> {
    const url = `/resources/scopes/{scope_id}`.replace(
      `{${'scope_id'}}`,
      encodeURIComponent(String(scopeId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Scope>(request);
  }

  /**
   *
   * @summary Delete a Scope
   * @param {string} scopeId Scope Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteScope(scopeId: string): Promise<MonoCloudResponse<null>> {
    const url = `/resources/scopes/{scope_id}`.replace(
      `{${'scope_id'}}`,
      encodeURIComponent(String(scopeId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Update a scope
   * @param {string} scopeId Scope Id
   * @param {PatchScopeRequest} patchScopeRequest Request Body
   * @returns Scope - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public patchScope(
    scopeId: string,
    patchScopeRequest: PatchScopeRequest
  ): Promise<MonoCloudResponse<Scope>> {
    const url = `/resources/scopes/{scope_id}`.replace(
      `{${'scope_id'}}`,
      encodeURIComponent(String(scopeId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchScopeRequest;

    return this.processRequest<Scope>(request);
  }

  /**
   *
   * @summary Find an Claim Resource by Id
   * @param {string} claimId Claim Id
   * @returns ClaimResource - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public findClaimResourceById(
    claimId: string
  ): Promise<MonoCloudResponse<ClaimResource>> {
    const url = `/resources/claim_resources/{claim_id}`.replace(
      `{${'claim_id'}}`,
      encodeURIComponent(String(claimId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ClaimResource>(request);
  }

  /**
   *
   * @summary Delete an Claim Resource
   * @param {string} claimId Claim Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public deleteClaimResource(
    claimId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/resources/claim_resources/{claim_id}`.replace(
      `{${'claim_id'}}`,
      encodeURIComponent(String(claimId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Update an Claim Resource
   * @param {string} claimId Claim Id
   * @param {PatchClaimResourceRequest} patchClaimResourceRequest Request Body
   * @returns ClaimResource - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public patchClaimResource(
    claimId: string,
    patchClaimResourceRequest: PatchClaimResourceRequest
  ): Promise<MonoCloudResponse<ClaimResource>> {
    const url = `/resources/claim_resources/{claim_id}`.replace(
      `{${'claim_id'}}`,
      encodeURIComponent(String(claimId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchClaimResourceRequest;

    return this.processRequest<ClaimResource>(request);
  }

  /**
   *
   * @summary Get all the Api Resources
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the resources needs to be filtered.
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'name\', \'display_name\', \'description\', and \'creation_time\'
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
  ): Promise<MonoCloudPageResponse<ApiResource[]>> {
    const url = `/resources/api_resources`;

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

    return this.processPaginatedRequest<ApiResource[]>(request);
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
    const url = `/resources/api_resources`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createApiResourceRequest;

    return this.processRequest<ApiResource>(request);
  }

  /**
   *
   * @summary Get all the Scopes
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the resources needs to be filtered.
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'name\', \'display_name\', \'description\', and \'creation_time\'
   * @returns Scope[] - Success
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   *
   */
  public getAllScopes(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<Scope[]>> {
    const url = `/resources/scopes`;

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

    return this.processPaginatedRequest<Scope[]>(request);
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
    const url = `/resources/scopes`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createScopeRequest;

    return this.processRequest<Scope>(request);
  }

  /**
   *
   * @summary Get all the Claim Resources
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the resources needs to be filtered.
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'name\', \'display_name\', \'description\', and \'creation_time\'
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
  ): Promise<MonoCloudPageResponse<ClaimResource[]>> {
    const url = `/resources/claim_resources`;

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

    return this.processPaginatedRequest<ClaimResource[]>(request);
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
    const url = `/resources/claim_resources`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createClaimResourceRequest;

    return this.processRequest<ClaimResource>(request);
  }
}
