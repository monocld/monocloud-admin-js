import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import {
  AddTrustStoreCertificatesRequest,
  AddTrustStoreRevocationsRequest,
  PatchTrustStoreCertificateRequest,
  PatchTrustStoreRevocationRequest,
  TrustStore,
  TrustStoreCertificate,
  TrustStoreParsed,
  TrustStoreRevocation,
} from '../models';

export class TrustStoreClient extends MonoCloudClientBase {
  /**
   *
   * @summary Add Certificate Revocations to truststore
   * @param {AddTrustStoreRevocationsRequest} addTrustStoreRevocationsRequest Request Body
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public addCertificateRevocations(
    addTrustStoreRevocationsRequest: AddTrustStoreRevocationsRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/truststore/revocations`;

    request.url = url;

    request.data = JSON.stringify(addTrustStoreRevocationsRequest);

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Add Certificates to truststore
   * @param {AddTrustStoreCertificatesRequest} addTrustStoreCertificatesRequest Request Body
   * @returns TrustStore - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public addCertificates(
    addTrustStoreCertificatesRequest: AddTrustStoreCertificatesRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/truststore/certificates`;

    request.url = url;

    request.data = JSON.stringify(addTrustStoreCertificatesRequest);

    return this.processRequest<TrustStore>(request);
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
   * @summary Get Truststore Chains
   * @returns TrustStoreParsed - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public getTrustStoreChains(): Promise<MonoCloudResponse<TrustStoreParsed>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/truststore/chains`;

    request.url = url;

    return this.processRequest<TrustStoreParsed>(request);
  }

  /**
   *
   * @summary Update a Certificate
   * @param {string} id Certificate Id
   * @param {PatchTrustStoreCertificateRequest} patchTrustStoreCertificateRequest Request Body
   * @returns TrustStoreCertificate - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public patchCertificate(
    id: string,
    patchTrustStoreCertificateRequest: PatchTrustStoreCertificateRequest
  ): Promise<MonoCloudResponse<TrustStoreCertificate>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/truststore/certificates/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    request.data = JSON.stringify(patchTrustStoreCertificateRequest);

    return this.processRequest<TrustStoreCertificate>(request);
  }

  /**
   *
   * @summary Update a Certificate Revocation
   * @param {string} id Certificate Revocation Id
   * @param {PatchTrustStoreRevocationRequest} patchTrustStoreRevocationRequest Request Body
   * @returns TrustStoreRevocation - Success
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public patchCertificateRevocations(
    id: string,
    patchTrustStoreRevocationRequest: PatchTrustStoreRevocationRequest
  ): Promise<MonoCloudResponse<TrustStoreRevocation>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/truststore/revocations/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    request.data = JSON.stringify(patchTrustStoreRevocationRequest);

    return this.processRequest<TrustStoreRevocation>(request);
  }
}
