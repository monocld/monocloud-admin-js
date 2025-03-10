/**
 * The Create Api Resource class models an OpenID Connect or OAuth 2.0 api resource
 * @export
 * @interface CreateApiResourceRequest
 */
export interface CreateApiResourceRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  enabled?: boolean;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The audience that will be added to the outgoing access token.
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  audience: string;
  /**
   * List of API scope names.
   * @type {string[]}
   * @memberof CreateApiResourceRequest
   */
  scopes: string[];
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {string[]}
   * @memberof CreateApiResourceRequest
   */
  user_claims: string[];
  /**
   * Specifies whether to auto-generate an API secret.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  auto_generate_secret?: boolean;
}
