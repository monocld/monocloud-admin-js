import { TrustStoreOptions } from './trust-store-options';

/**
 * Trust Store Response
 * @export
 * @interface TrustStore
 */
export interface TrustStore {
  /**
   * Id of the trust store
   * @type {string}
   * @memberof TrustStore
   */
  id: string;
  /**
   * Name of the trust store
   * @type {string}
   * @memberof TrustStore
   */
  name: string;
  /**
   * Specifies if the trust store is enabled.
   * @type {boolean}
   * @memberof TrustStore
   */
  enabled: boolean;
  /**
   * Specifies if the trust store is the store used at the default MTLS endpoint.
   * @type {boolean}
   * @memberof TrustStore
   */
  is_default: boolean;
  /**
   * Specifies if the specific trust store metadata should be shown in the discovery endpoint.
   * @type {boolean}
   * @memberof TrustStore
   */
  show_in_discovery_document: boolean;
  /**
   * The entire certificate chain
   * @type {string}
   * @memberof TrustStore
   */
  cert_chain: string;
  /**
   * The Trust store options
   * @type {TrustStoreOptions}
   * @memberof TrustStore
   */
  options: TrustStoreOptions;
  /**
   * Specifies the creation time of the trust store (in Epoch).
   * @type {number}
   * @memberof TrustStore
   */
  creation_time: number;
  /**
   * Specifies the last update time of the trust store (in Epoch).
   * @type {number}
   * @memberof TrustStore
   */
  last_updated: number;
}
