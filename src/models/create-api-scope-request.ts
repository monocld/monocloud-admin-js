/**
 * The Create Api Scope class models an OpenID Connect or OAuth 2.0 api scope
 * @export
 * @interface CreateApiScopeRequest
 */
export interface CreateApiScopeRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  enabled: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof CreateApiScopeRequest
   */
  name: string;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof CreateApiScopeRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof CreateApiScopeRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  show_in_discovery_document: boolean;
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {Array<string>}
   * @memberof CreateApiScopeRequest
   */
  user_claims: Array<string>;
  /**
   * Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  required: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  emphasize: boolean;
}
