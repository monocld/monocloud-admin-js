/**
 * Create Revocation Request.
 * @export
 * @interface CreateTrustStoreRevocationRequest
 */
export interface CreateTrustStoreRevocationRequest {
  /**
   * Specifies if the certificate is enabled.
   * @type {boolean}
   * @memberof CreateTrustStoreRevocationRequest
   */
  enabled?: boolean;
  /**
   * Certificate Crl Value.
   * @type {string}
   * @memberof CreateTrustStoreRevocationRequest
   */
  value: string;
}
