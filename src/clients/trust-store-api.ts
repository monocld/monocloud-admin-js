import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import {
  AddBannedThumbprintsRequest,
  CreateTrustStoreCertificateRequest,
  CreateTrustStoreRevocationRequest,
  TrustStore,
  TrustStoreCertificate,
  TrustStoreRevocation,
  UpdateTrustStoreRevocationRequest,
} from '../models';

export class TrustStoreClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get Truststore
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public getTrustStore(): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststore`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Add a Certificates to truststore
   * @param {CreateTrustStoreCertificateRequest} createTrustStoreCertificateRequest Request Body
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public addCertificate(
    createTrustStoreCertificateRequest: CreateTrustStoreCertificateRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststore/certificates`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createTrustStoreCertificateRequest;

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Enable a Certificate
   * @param {string} id Certificate Id
   * @returns TrustStoreCertificate - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public enableCertificate(
    id: string
  ): Promise<MonoCloudResponse<TrustStoreCertificate>> {
    const url = `/truststore/certificates/{id}/enable`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<TrustStoreCertificate>(request);
  }

  /**
   *
   * @summary Disable a Certificate
   * @param {string} id Certificate Id
   * @returns TrustStoreCertificate - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public disableCertificate(
    id: string
  ): Promise<MonoCloudResponse<TrustStoreCertificate>> {
    const url = `/truststore/certificates/{id}/disable`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<TrustStoreCertificate>(request);
  }

  /**
   *
   * @summary Delete a Certificate
   * @param {string} id Certificate Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public deleteCertificate(id: string): Promise<MonoCloudResponse<null>> {
    const url = `/truststore/certificates/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Add a Certificate Revocation to truststore
   * @param {CreateTrustStoreRevocationRequest} createTrustStoreRevocationRequest Request Body
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public addCertificateRevocation(
    createTrustStoreRevocationRequest: CreateTrustStoreRevocationRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststore/revocations`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createTrustStoreRevocationRequest;

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Enable a Certificate Revocation
   * @param {string} id Certificate Revocation Id
   * @returns TrustStoreRevocation - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public enableCertificateRevocation(
    id: string
  ): Promise<MonoCloudResponse<TrustStoreRevocation>> {
    const url = `/truststore/revocations/{id}/enable`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<TrustStoreRevocation>(request);
  }

  /**
   *
   * @summary Disable a Certificate Revocation
   * @param {string} id Certificate Revocation Id
   * @returns TrustStoreRevocation - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public disableCertificateRevocation(
    id: string
  ): Promise<MonoCloudResponse<TrustStoreRevocation>> {
    const url = `/truststore/revocations/{id}/disable`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<TrustStoreRevocation>(request);
  }

  /**
   *
   * @summary Delete a Certificate Revocation
   * @param {string} id Certificate Revocation Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public deleteCertificateRevocation(
    id: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststore/revocations/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Update a Certificate Revocation
   * @param {string} id Certificate Revocation Id
   * @param {UpdateTrustStoreRevocationRequest} updateTrustStoreRevocationRequest Update certificate revocation request
   * @returns TrustStoreRevocation - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public updateCertificateRevocation(
    id: string,
    updateTrustStoreRevocationRequest: UpdateTrustStoreRevocationRequest
  ): Promise<MonoCloudResponse<TrustStoreRevocation>> {
    const url = `/truststore/revocations/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = updateTrustStoreRevocationRequest;

    return this.processRequest<TrustStoreRevocation>(request);
  }

  /**
   *
   * @summary Adds a list of banned certificate thumbprints
   * @param {AddBannedThumbprintsRequest} addBannedThumbprintsRequest Request Body
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public addBannedThumbprints(
    addBannedThumbprintsRequest: AddBannedThumbprintsRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststore/thumbprints`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = addBannedThumbprintsRequest;

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Delete a Banned Thumbprint
   * @param {string} thumbprint Thumbprint
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public deleteBannedThumbprint(
    thumbprint: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststore/thumbprints/{thumbprint}`.replace(
      `{${'thumbprint'}}`,
      encodeURIComponent(String(thumbprint))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }
}
