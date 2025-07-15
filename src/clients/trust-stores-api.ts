import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import {
  AddCertificateRevocationRequest,
  BanTrustStoreCertificateRequest,
  CertificateRevocation,
  CreateTrustStoreRequest,
  PatchTrustStoreRequest,
  TrustStore,
  TrustStoreBasic,
} from '../models';

export class TrustStoresClient extends MonoCloudClientBase {
  /**
   * Retrieves a paginated list of trust stores. The endpoint allows you to specify optional search parameters to refine the results.
   * @summary Get All Trust Stores
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'name\', \'creation_time\', and \'last_updated\'
   * @returns TrustStoreBasic[] - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public getAllTrustStores(
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<TrustStoreBasic[]>> {
    const url = `/truststores`;

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

    return this.processPaginatedRequest<TrustStoreBasic[]>(request);
  }

  /**
   *
   * @summary Create a Trust Store
   * @param {CreateTrustStoreRequest} createTrustStoreRequest
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public createTrustStore(
    createTrustStoreRequest: CreateTrustStoreRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststores`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createTrustStoreRequest;

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Find a Trust Store
   * @param {string} trustStoreId Trust Store Id
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public findTrustStoreById(
    trustStoreId: string
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststores/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Delete a Trust Store
   * @param {string} trustStoreId Trust Store Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public deleteTrustStore(
    trustStoreId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststores/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Update a Trust Store
   * @param {string} trustStoreId Trust Store Id
   * @param {PatchTrustStoreRequest} patchTrustStoreRequest
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public patchTrustStore(
    trustStoreId: string,
    patchTrustStoreRequest: PatchTrustStoreRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststores/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchTrustStoreRequest;

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Sets a trust store as default
   * @param {string} trustStoreId Trust Store Id
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public setTrustStoreDefault(
    trustStoreId: string
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststores/{trust_store_id}/default`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<TrustStore>(request);
  }

  /**
   * Retrieves a paginated list of revocations for a trust store. The endpoint allows you to specify optional search parameters to refine the results.
   * @summary Get All Revocations
   * @param {string} trustStoreId Trust Store Id
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'name\', \'creation_time\', and \'last_updated\'
   * @returns CertificateRevocation[] - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public getAllRevocations(
    trustStoreId: string,
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<CertificateRevocation[]>> {
    const url = `/truststores/{trust_store_id}/revocations`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
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

    return this.processPaginatedRequest<CertificateRevocation[]>(request);
  }

  /**
   *
   * @summary Add a Revocation
   * @param {string} trustStoreId Trust Store Id
   * @param {AddCertificateRevocationRequest} addCertificateRevocationRequest Request Body
   * @returns CertificateRevocation - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public addCertificateRevocation(
    trustStoreId: string,
    addCertificateRevocationRequest: AddCertificateRevocationRequest
  ): Promise<MonoCloudResponse<CertificateRevocation>> {
    const url = `/truststores/{trust_store_id}/revocations`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = addCertificateRevocationRequest;

    return this.processRequest<CertificateRevocation>(request);
  }

  /**
   *
   * @summary Find a Revocation by Id
   * @param {string} trustStoreId Trust Store Id
   * @param {string} revocationId RevocationId
   * @returns CertificateRevocation - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public findCertificateRevocation(
    trustStoreId: string,
    revocationId: string
  ): Promise<MonoCloudResponse<CertificateRevocation>> {
    const url = `/truststores/{trust_store_id}/revocations/{revocation_id}`
      .replace(
        `{${'trust_store_id'}}`,
        encodeURIComponent(String(trustStoreId))
      )
      .replace(
        `{${'revocation_id'}}`,
        encodeURIComponent(String(revocationId))
      );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<CertificateRevocation>(request);
  }

  /**
   *
   * @summary Remove a Revocation
   * @param {string} trustStoreId Trust Store Id
   * @param {string} revocationId Certificate Revocation Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public removeCertificateRevocation(
    trustStoreId: string,
    revocationId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststores/{trust_store_id}/revocations/{revocation_id}`
      .replace(
        `{${'trust_store_id'}}`,
        encodeURIComponent(String(trustStoreId))
      )
      .replace(
        `{${'revocation_id'}}`,
        encodeURIComponent(String(revocationId))
      );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Ban a certificate thumbprint
   * @param {string} trustStoreId Trust Store Id
   * @param {BanTrustStoreCertificateRequest} banTrustStoreCertificateRequest Request Body
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public banTrustStoreCertificate(
    trustStoreId: string,
    banTrustStoreCertificateRequest: BanTrustStoreCertificateRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststores/{trust_store_id}/thumbprints`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = banTrustStoreCertificateRequest;

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Unban a certificate thumbprint
   * @param {string} trustStoreId Trust Store Id
   * @param {string} thumbprint Thumbprint
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   *
   */
  public unbanTrustStoreCertificate(
    trustStoreId: string,
    thumbprint: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststores/{trust_store_id}/thumbprints/{thumbprint}`
      .replace(
        `{${'trust_store_id'}}`,
        encodeURIComponent(String(trustStoreId))
      )
      .replace(`{${'thumbprint'}}`, encodeURIComponent(String(thumbprint)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }
}
