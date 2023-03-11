/**
 * Trust Store Certificate Revocation Parsed Response
 * @export
 * @interface TrustStoreRevocationParsed
 */
export interface TrustStoreRevocationParsed {
  /**
   * Certificate Id.
   * @type {string}
   * @memberof TrustStoreRevocationParsed
   */
  id: string;
  /**
   * Specifies if the certificate is enabled.
   * @type {boolean}
   * @memberof TrustStoreRevocationParsed
   */
  enabled: boolean;
  /**
   * Certificate Crl Value.
   * @type {string}
   * @memberof TrustStoreRevocationParsed
   */
  value: string;
  /**
   * The associated name/alias for the crl.
   * @type {string}
   * @memberof TrustStoreRevocationParsed
   */
  name: string;
  /**
   * The algorithm used to create the crl.
   * @type {string}
   * @memberof TrustStoreRevocationParsed
   */
  algorithm: string;
  /**
   * The format version of the crl.
   * @type {number}
   * @memberof TrustStoreRevocationParsed
   */
  version: number;
  /**
   * The certificate authority that issued the crl.
   * @type {{ [key: string]: string; }}
   * @memberof TrustStoreRevocationParsed
   */
  issuer: { [key: string]: string };
  /**
   * Specifies the last update time (in Epoch) of the crl.
   * @type {number}
   * @memberof TrustStoreRevocationParsed
   */
  last_update: number;
  /**
   * Specifies the time (in Epoch) at which the next update is supposed to happen.
   * @type {number}
   * @memberof TrustStoreRevocationParsed
   */
  next_update?: number | null;
}
