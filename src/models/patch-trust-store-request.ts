import { PatchTrustStoreOptionsRequest } from './patch-trust-store-options-request';

/**
 * The Patch trust store request class
 * @export
 * @interface PatchTrustStoreRequest
 */
export interface PatchTrustStoreRequest {
  /**
   * Name of the trust store
   * @type {string}
   * @memberof PatchTrustStoreRequest
   */
  name?: string;
  /**
   * Specifies if the trust store is enabled.
   * @type {boolean}
   * @memberof PatchTrustStoreRequest
   */
  enabled?: boolean;
  /**
   * Specifies if the specific trust store metadata should be shown in the discovery endpoint.
   * @type {boolean}
   * @memberof PatchTrustStoreRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The entire certificate chain
   * @type {string}
   * @memberof PatchTrustStoreRequest
   */
  cert_chain?: string;
  /**
   * The Trust store options
   * @type {PatchTrustStoreOptionsRequest}
   * @memberof PatchTrustStoreRequest
   */
  options?: PatchTrustStoreOptionsRequest;
}
