/**
 * The Patch Claim Resource class
 * @export
 * @interface PatchClaimResourceRequest
 */
export interface PatchClaimResourceRequest {
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof PatchClaimResourceRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the claim.
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  name?: string;
  /**
   * Specifies the source of the claim.
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  source?: string;
}
