/**
 * The Patch Api Scope class
 * @export
 * @interface PatchApiScopeRequest
 */
export interface PatchApiScopeRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  enabled?: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof PatchApiScopeRequest
   */
  name?: string;
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
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  required?: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof PatchApiScopeRequest
   */
  emphasize?: boolean;
}
