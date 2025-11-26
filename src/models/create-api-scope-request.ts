/**
 * The Create Api Scope Resource class
 * @export
 * @interface CreateApiScopeRequest
 */
export interface CreateApiScopeRequest {
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
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof CreateApiScopeRequest
   */
  name: string;
  /**
   * Specifies whether the user can de-select the scope on the consent screen.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  required?: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope. Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  emphasize?: boolean;
  /**
   * Specifies whether the scopes will automatically added to the token when the scope parameter is empty.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  is_default?: boolean;
  /**
   * List of associated user claim types that should be included in the Access Token.
   * @type {string[]}
   * @memberof CreateApiScopeRequest
   */
  user_claims?: string[];
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof CreateApiScopeRequest
   */
  show_in_discovery_document?: boolean;
}
