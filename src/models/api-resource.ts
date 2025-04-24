/**
 * The Api Resource response class
 * @export
 * @interface ApiResource
 */
export interface ApiResource {
  /**
   * Unique ID of the Resource
   * @type {string}
   * @memberof ApiResource
   */
  id: string;
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof ApiResource
   */
  enabled: boolean;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof ApiResource
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof ApiResource
   */
  description?: string | null;
  /**
   * Specifies the creation time of the resource (in Epoch).
   * @type {number}
   * @memberof ApiResource
   */
  creation_time: number;
  /**
   * Specifies the last update time of the resource (in Epoch).
   * @type {number}
   * @memberof ApiResource
   */
  last_updated: number;
  /**
   * The audience that will be added to the outgoing access token.
   * @type {string}
   * @memberof ApiResource
   */
  audience: string;
  /**
   * Specifies whether the resource requires an exclusive access token.
   * @type {boolean}
   * @memberof ApiResource
   */
  require_exclusive_token: boolean;
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {string[]}
   * @memberof ApiResource
   */
  user_claims: string[];
}
