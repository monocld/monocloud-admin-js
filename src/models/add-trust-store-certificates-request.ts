import { CreateTrustStoreCertificateRequest } from './create-trust-store-certificate-request';

/**
 * Add Certificates Request.
 * @export
 * @interface AddTrustStoreCertificatesRequest
 */
export interface AddTrustStoreCertificatesRequest {
  /**
   * List of certificates.
   * @type {CreateTrustStoreCertificateRequest[]}
   * @memberof AddTrustStoreCertificatesRequest
   */
  certificates: CreateTrustStoreCertificateRequest[];
}
