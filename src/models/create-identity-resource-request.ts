/**
 * The Create Identity Resource class models an OpenID Connect or OAuth 2.0 identity resource
 * @export
 * @interface CreateIdentityResourceRequest
 */
export interface CreateIdentityResourceRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof CreateIdentityResourceRequest
   */
  enabled: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof CreateIdentityResourceRequest
   */
  name: string;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof CreateIdentityResourceRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof CreateIdentityResourceRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof CreateIdentityResourceRequest
   */
  show_in_discovery_document: boolean;
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {Set<string>}
   * @memberof CreateIdentityResourceRequest
   */
  user_claims: Set<string>;
  /**
   * Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof CreateIdentityResourceRequest
   */
  required: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof CreateIdentityResourceRequest
   */
  emphasize: boolean;
}
