import { TrustStoreStatus } from './trust-store-status';

/**
 * Trust Store Basic Response
 * @export
 * @interface TrustStoreBasic
 */
export interface TrustStoreBasic {
  /**
   * Id of the trust store
   * @type {string}
   * @memberof TrustStoreBasic
   */
  id: string;
  /**
   * Name of the trust store
   * @type {string}
   * @memberof TrustStoreBasic
   */
  name: string;
  /**
   * Specifies if the trust store is enabled.
   * @type {boolean}
   * @memberof TrustStoreBasic
   */
  enabled: boolean;
  /**
   * Specifies if the trust store is the store used at the default MTLS endpoint.
   * @type {boolean}
   * @memberof TrustStoreBasic
   */
  is_default: boolean;
  /**
   * Specifies the number of certificates in the store.
   * @type {number}
   * @memberof TrustStoreBasic
   */
  certificate_count: number;
  /**
   * Specifies the number of banned thumbprints in the store.
   * @type {number}
   * @memberof TrustStoreBasic
   */
  banned_thumbprints_count: number;
  /**
   * Specifies the creation time of the trust store (in Epoch).
   * @type {number}
   * @memberof TrustStoreBasic
   */
  creation_time: number;
  /**
   * Specifies the last update time of the trust store (in Epoch).
   * @type {number}
   * @memberof TrustStoreBasic
   */
  last_updated: number;
  /**
   * Specifies the trust store status.
   * @type {TrustStoreStatus}
   * @memberof TrustStoreBasic
   */
  status: TrustStoreStatus;
}
