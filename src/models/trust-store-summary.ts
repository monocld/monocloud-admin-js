/**
 * Trust Store Summary Response
 * @export
 * @interface TrustStoreSummary
 */
export interface TrustStoreSummary {
  /**
   * Id of the trust store
   * @type {string}
   * @memberof TrustStoreSummary
   */
  id: string;
  /**
   * Name of the trust store
   * @type {string}
   * @memberof TrustStoreSummary
   */
  name: string;
  /**
   * Specifies if the trust store is enabled.
   * @type {boolean}
   * @memberof TrustStoreSummary
   */
  enabled: boolean;
  /**
   * Specifies if the trust store is the store used at the default MTLS endpoint.
   * @type {boolean}
   * @memberof TrustStoreSummary
   */
  is_default: boolean;
  /**
   * Specifies the number of certificates in the store.
   * @type {number}
   * @memberof TrustStoreSummary
   */
  certificate_count: number;
  /**
   * Specifies the number of banned certificates in the store.
   * @type {number}
   * @memberof TrustStoreSummary
   */
  banned_certificates_count: number;
  /**
   * Specifies the creation time of the trust store (in Epoch).
   * @type {number}
   * @memberof TrustStoreSummary
   */
  creation_time: number;
  /**
   * Specifies the last update time of the trust store (in Epoch).
   * @type {number}
   * @memberof TrustStoreSummary
   */
  last_updated: number;
}
