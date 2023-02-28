/**
 * The Patch Identity Resource class
 * @export
 * @interface PatchIdentityResourceRequest
 */
export interface PatchIdentityResourceRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof PatchIdentityResourceRequest
   */
  enabled?: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof PatchIdentityResourceRequest
   */
  name?: string;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof PatchIdentityResourceRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof PatchIdentityResourceRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof PatchIdentityResourceRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {Set<string>}
   * @memberof PatchIdentityResourceRequest
   */
  user_claims?: Set<string>;
  /**
   * Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof PatchIdentityResourceRequest
   */
  required?: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof PatchIdentityResourceRequest
   */
  emphasize?: boolean;
}
