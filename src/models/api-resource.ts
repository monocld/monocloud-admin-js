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
   * The Api secret is used for the introspection endpoint. The API can authenticate with introspection using the API name and secret.
   * @type {Secret[]}
   * @memberof ApiResource
   */
  api_secrets: Secret[];
  /**
   * List of API scope names.
   * @type {string[]}
   * @memberof ApiResource
   */
  scopes: string[];
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {string[]}
   * @memberof ApiResource
   */
  user_claims: string[];
}
