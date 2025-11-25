import { BannedCertificateType } from './banned-certificate-type';

/**
 * Ban Certificate Request.
 * @export
 * @interface BanTrustStoreCertificateRequest
 */
export interface BanTrustStoreCertificateRequest {
  /**
   * Unique thumbprint of the certificate.
   * @type {string}
   * @memberof BanTrustStoreCertificateRequest
   */
  value: string;
  /**
   * Specifies the reason for banning the certificate.
   * @type {string}
   * @memberof BanTrustStoreCertificateRequest
   */
  reason?: string | null;
  /**
   * Specifies the type of the banned certificate.
   * @type {BannedCertificateType}
   * @memberof BanTrustStoreCertificateRequest
   */
  type?: BannedCertificateType;
}
