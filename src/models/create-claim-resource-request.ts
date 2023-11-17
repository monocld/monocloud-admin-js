/**
 * The Create Claim Resource class models an OpenID Connect or OAuth 2.0 claim resource
 * @export
 * @interface CreateClaimResourceRequest
 */
export interface CreateClaimResourceRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof CreateClaimResourceRequest
   */
  enabled: boolean;
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
  show_in_discovery_document: boolean;
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
  /**
   * Specifies whether the user can de-select the claim on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof CreateClaimResourceRequest
   */
  required: boolean;
  /**
   * Specifies whether the consent screen will emphasize this claim (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof CreateClaimResourceRequest
   */
  emphasize: boolean;
}
