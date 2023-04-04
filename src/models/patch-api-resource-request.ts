/**
 * The Patch Api Resource class
 * @export
 * @interface PatchApiResourceRequest
 */
export interface PatchApiResourceRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  enabled?: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof PatchApiResourceRequest
   */
  name?: string;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof PatchApiResourceRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof PatchApiResourceRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * List of API scope names.
   * @type {string[]}
   * @memberof PatchApiResourceRequest
   */
  scopes?: string[];
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {string[]}
   * @memberof PatchApiResourceRequest
   */
  user_claims?: string[];
}
