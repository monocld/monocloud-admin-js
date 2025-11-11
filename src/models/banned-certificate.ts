import { BannedCertificateType } from './banned-certificate-type';

/**
 * Banned Certificate Response
 * @export
 * @interface BannedCertificate
 */
export interface BannedCertificate {
  /**
   * The Id of the banned certificate.
   * @type {string}
   * @memberof BannedCertificate
   */
  id: string;
  /**
   * Specifies the type of the banned certificate.
   * @type {BannedCertificateType}
   * @memberof BannedCertificate
   */
  type: BannedCertificateType;
  /**
   * Unique thumbprint of the certificate.
   * @type {string}
   * @memberof BannedCertificate
   */
  value: string;
  /**
   * Specifies the reason for banning the certificate.
   * @type {string}
   * @memberof BannedCertificate
   */
  reason?: string | null;
  /**
   * Specifies the creation time (in Epoch).
   * @type {number}
   * @memberof BannedCertificate
   */
  creation_time: number;
}
