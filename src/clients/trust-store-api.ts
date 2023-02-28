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
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public addCertificateRevocations(
    addTrustStoreRevocationsRequest: AddTrustStoreRevocationsRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/v1/truststore/revocations`;
    request.url = url;

    request.data = JSON.stringify(addTrustStoreRevocationsRequest);

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Add Certificates to truststore
   * @param {AddTrustStoreCertificatesRequest} addTrustStoreCertificatesRequest Request Body
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public addCertificates(
    addTrustStoreCertificatesRequest: AddTrustStoreCertificatesRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const request: AxiosRequestConfig = { method: 'POST' };

    const url = `/v1/truststore/certificates`;
    request.url = url;

    request.data = JSON.stringify(addTrustStoreCertificatesRequest);

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Delete a Certificate
   * @param {string} id Certificate Id
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public deleteCertificate(id: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/v1/truststore/certificates/{id}`.replace(
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
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public deleteCertificateRevocation(
    id: string
  ): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'DELETE' };

    const url = `/v1/truststore/revocations/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );
    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Get Truststore
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public getTrustStore(): Promise<MonoCloudResponse<TrustStore>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/truststore`;
    request.url = url;

    return this.processRequest<TrustStore>(request);
  }

  /**
   *
   * @summary Get Truststore Chains
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public getTrustStoreChains(): Promise<MonoCloudResponse<TrustStoreParsed>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/truststore/chains`;
    request.url = url;

    return this.processRequest<TrustStoreParsed>(request);
  }

  /**
   *
   * @summary Update a Certificate
   * @param {string} id Certificate Id
   * @param {PatchTrustStoreCertificateRequest} patchTrustStoreCertificateRequest Request Body
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public patchCertificate(
    id: string,
    patchTrustStoreCertificateRequest: PatchTrustStoreCertificateRequest
  ): Promise<MonoCloudResponse<TrustStoreCertificate>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/v1/truststore/certificates/{id}`.replace(
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
   * @throws {MonoCloudException}
   * @memberof TrustStoreClient
   *
   */
  public patchCertificateRevocations(
    id: string,
    patchTrustStoreRevocationRequest: PatchTrustStoreRevocationRequest
  ): Promise<MonoCloudResponse<TrustStoreRevocation>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/v1/truststore/revocations/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );
    request.url = url;

    request.data = JSON.stringify(patchTrustStoreRevocationRequest);

    return this.processRequest<TrustStoreRevocation>(request);
  }
}
