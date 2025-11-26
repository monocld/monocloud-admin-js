/**
 * The Create Claim Resource class models an OpenID Connect or OAuth 2.0 claim resource
 * @export
 * @interface CreateClaimResourceRequest
 */
export interface CreateClaimResourceRequest {
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof CreateClaimResourceRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof CreateClaimResourceRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof CreateClaimResourceRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the claim.
   * @type {string}
   * @memberof CreateClaimResourceRequest
   */
  name: string;
  /**
   * Specifies the source of the claim.
   * @type {string}
   * @memberof CreateClaimResourceRequest
   */
  source: string;
}
