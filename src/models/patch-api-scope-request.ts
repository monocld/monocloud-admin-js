/**
 * The Patch Api Scope Resource class
 * @export
 * @interface PatchApiScopeRequest
 */
export interface PatchApiScopeRequest {
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof PatchApiScopeRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof PatchApiScopeRequest
   */
  description?: string | null;
  /**
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof PatchApiScopeRequest
   */
  name?: string;
  /**
   * Specifies whether the user can de-select the scope on the consent screen.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  required?: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope. Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  emphasize?: boolean;
  /**
   * Specifies whether the scopes will automatically added to the token when the scope parameter is empty.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  is_default?: boolean;
  /**
   * List of associated user claim types that should be included in the Access Token.
   * @type {string[]}
   * @memberof PatchApiScopeRequest
   */
  user_claims?: string[];
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  show_in_discovery_document?: boolean;
}
