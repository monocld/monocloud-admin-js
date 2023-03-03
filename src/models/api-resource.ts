import { Secret } from './secret';

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
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof ApiResource
   */
  name: string;
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
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof ApiResource
   */
  show_in_discovery_document: boolean;
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {Set<string>}
   * @memberof ApiResource
   */
  user_claims: Set<string>;
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
   * The Api secret is used for the introspection endpoint. The API can authenticate with introspection using the API name and secret.
   * @type {Array<Secret>}
   * @memberof ApiResource
   */
  api_secrets: Array<Secret>;
  /**
   * List of API scope names.
   * @type {Set<string>}
   * @memberof ApiResource
   */
  scopes: Set<string>;
}