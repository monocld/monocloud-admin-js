/**
 * Trust Store Certificate Revocation Response
 * @export
 * @interface TrustStoreRevocation
 */
export interface TrustStoreRevocation {
  /**
   * Certificate Id.
   * @type {string}
   * @memberof TrustStoreRevocation
   */
  id: string;
  /**
   * Specifies if the certificate is enabled.
   * @type {boolean}
   * @memberof TrustStoreRevocation
   */
  enabled: boolean;
  /**
   * Certificate Crl Value.
   * @type {string}
   * @memberof TrustStoreRevocation
   */
  value: string;
}
