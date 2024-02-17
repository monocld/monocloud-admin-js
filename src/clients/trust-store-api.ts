import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
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
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/truststore`;

    request.url = url;

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
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/truststore/certificates`;

    request.url = url;

    request.data = JSON.stringify(createTrustStoreCertificateRequest);

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
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/truststore/certificates/{id}/enable`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

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
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/truststore/certificates/{id}/disable`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

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
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/truststore/certificates/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

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
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/truststore/revocations`;

    request.url = url;

    request.data = JSON.stringify(createTrustStoreRevocationRequest);

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
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/truststore/revocations/{id}/enable`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

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
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/truststore/revocations/{id}/disable`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

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
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/truststore/revocations/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

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
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/truststore/revocations/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    request.data = JSON.stringify(updateTrustStoreRevocationRequest);

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
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/truststore/thumbprints`;

    request.url = url;

    request.data = JSON.stringify(addBannedThumbprintsRequest);

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
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/truststore/thumbprints/{thumbprint}`.replace(
      `{${'thumbprint'}}`,
      encodeURIComponent(String(thumbprint))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }
}
