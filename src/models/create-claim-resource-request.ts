/**
 * The Create Claim Resource class models an OpenID Connect or OAuth 2.0 identity resource
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
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof CreateClaimResourceRequest
   */
  name: string;
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
