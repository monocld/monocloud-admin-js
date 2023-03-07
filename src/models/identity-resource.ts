/**
 * The Identity Resource response class
 * @export
 * @interface IdentityResource
 */
export interface IdentityResource {
  /**
   * Unique ID of the Resource
   * @type {string}
   * @memberof IdentityResource
   */
  id: string;
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof IdentityResource
   */
  enabled: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof IdentityResource
   */
  name: string;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof IdentityResource
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof IdentityResource
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof IdentityResource
   */
  show_in_discovery_document: boolean;
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {string[]}
   * @memberof IdentityResource
   */
  user_claims: string[];
  /**
   * Specifies the creation time of the resource (in Epoch).
   * @type {number}
   * @memberof IdentityResource
   */
  creation_time: number;
  /**
   * Specifies the last update time of the resource (in Epoch).
   * @type {number}
   * @memberof IdentityResource
   */
  last_updated: number;
  /**
   * Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof IdentityResource
   */
  required: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof IdentityResource
   */
  emphasize: boolean;
  /**
   * Specifies whether it\'s a built-in identity resource.
   * @type {boolean}
   * @memberof IdentityResource
   */
  is_default: boolean;
}
