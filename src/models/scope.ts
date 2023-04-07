import { IdentityClaim } from './identity-claim';

/**
 * The Scope response class
 * @export
 * @interface Scope
 */
export interface Scope {
  /**
   * Unique ID of the Resource
   * @type {string}
   * @memberof Scope
   */
  id: string;
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof Scope
   */
  enabled: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof Scope
   */
  name: string;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof Scope
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof Scope
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof Scope
   */
  show_in_discovery_document: boolean;
  /**
   * Specifies the creation time of the resource (in Epoch).
   * @type {number}
   * @memberof Scope
   */
  creation_time: number;
  /**
   * Specifies the last update time of the resource (in Epoch).
   * @type {number}
   * @memberof Scope
   */
  last_updated: number;
  /**
   * Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof Scope
   */
  required: boolean;
  /**
   * Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof Scope
   */
  emphasize: boolean;
  /**
   * Specifies whether it\'s a built-in scope.
   * @type {boolean}
   * @memberof Scope
   */
  is_default: boolean;
  /**
   * List of associated user claim types that should be included in the Identity token or as returned from the User Info Endpoint.
   * @type {IdentityClaim[]}
   * @memberof Scope
   */
  user_claims: IdentityClaim[];
}
