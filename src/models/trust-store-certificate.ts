/**
 * Trust Store Certificate Response
 * @export
 * @interface TrustStoreCertificate
 */
export interface TrustStoreCertificate {
  /**
   * Certificate Id.
   * @type {string}
   * @memberof TrustStoreCertificate
   */
  id: string;
  /**
   * Specifies if the certificate is enabled.
   * @type {boolean}
   * @memberof TrustStoreCertificate
   */
  enabled: boolean;
  /**
   * Certificate Value.
   * @type {string}
   * @memberof TrustStoreCertificate
   */
  value: string;
}
