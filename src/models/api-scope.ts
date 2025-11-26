/**
 * The Api Scope Resource response class
 * @export
 * @interface ApiScope
 */
export interface ApiScope {
  /**
   * Unique ID of the Resource
   * @type {string}
   * @memberof ApiScope
   */
  id: string;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof ApiScope
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof ApiScope
   */
  description?: string | null;
  /**
   * Specifies the creation time of the resource (in Epoch).
   * @type {number}
   * @memberof ApiScope
   */
  creation_time: number;
  /**
   * Specifies the last update time of the resource (in Epoch).
   * @type {number}
   * @memberof ApiScope
   */
  last_updated: number;
  /**
   * The unique name of the scope. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof ApiScope
   */
  name: string;
  /**
   * Specifies whether the user can de-select the scope on the consent screen.
   * @type {boolean}
   * @memberof ApiScope
   */
  required: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope. Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof ApiScope
   */
  emphasize: boolean;
  /**
   * Specifies whether the scopes will automatically added to the token when the scope parameter is empty.
   * @type {boolean}
   * @memberof ApiScope
   */
  is_default: boolean;
  /**
   * List of associated user claim types that should be included in the Access Token.
   * @type {string[]}
   * @memberof ApiScope
   */
  user_claims: string[];
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof ApiScope
   */
  show_in_discovery_document: boolean;
}
