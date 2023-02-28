/**
 * The Api Scope response class
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
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof ApiScope
   */
  enabled: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof ApiScope
   */
  name: string;
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
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof ApiScope
   */
  show_in_discovery_document: boolean;
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {Set<string>}
   * @memberof ApiScope
   */
  user_claims: Set<string>;
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
   * Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof ApiScope
   */
  required: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof ApiScope
   */
  emphasize: boolean;
}
