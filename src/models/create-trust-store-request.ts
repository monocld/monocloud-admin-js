import { CreateTrustStoreOptionsRequest } from './create-trust-store-options-request';

/**
 * Create Trust Store Request.
 * @export
 * @interface CreateTrustStoreRequest
 */
export interface CreateTrustStoreRequest {
  /**
   * Name of the trust store
   * @type {string}
   * @memberof CreateTrustStoreRequest
   */
  name: string;
  /**
   * Specifies if the specific trust store metadata should be shown in the discovery endpoint.
   * @type {boolean}
   * @memberof CreateTrustStoreRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The entire certificate chain
   * @type {string}
   * @memberof CreateTrustStoreRequest
   */
  cert_chain: string;
  /**
   * The Trust store options
   * @type {CreateTrustStoreOptionsRequest}
   * @memberof CreateTrustStoreRequest
   */
  options: CreateTrustStoreOptionsRequest;
}
