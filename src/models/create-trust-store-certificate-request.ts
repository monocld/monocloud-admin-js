/**
 * Create Certificate Request.
 * @export
 * @interface CreateTrustStoreCertificateRequest
 */
export interface CreateTrustStoreCertificateRequest {
  /**
   * Specifies if the certificate is enabled.
   * @type {boolean}
   * @memberof CreateTrustStoreCertificateRequest
   */
  enabled: boolean;
  /**
   * Certificate Value.
   * @type {string}
   * @memberof CreateTrustStoreCertificateRequest
   */
  value: string;
}
