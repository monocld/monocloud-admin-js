/**
 * The Claim Resource response class
 * @export
 * @interface ClaimResource
 */
export interface ClaimResource {
  /**
   * Unique ID of the Resource
   * @type {string}
   * @memberof ClaimResource
   */
  id: string;
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof ClaimResource
   */
  enabled: boolean;
  /**
   * The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request.
   * @type {string}
   * @memberof ClaimResource
   */
  name: string;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof ClaimResource
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof ClaimResource
   */
  description?: string | null;
  /**
   * Specifies whether this resource is shown in the discovery document.
   * @type {boolean}
   * @memberof ClaimResource
   */
  show_in_discovery_document: boolean;
  /**
   * Specifies the creation time of the resource (in Epoch).
   * @type {number}
   * @memberof ClaimResource
   */
  creation_time: number;
  /**
   * Specifies the last update time of the resource (in Epoch).
   * @type {number}
   * @memberof ClaimResource
   */
  last_updated: number;
  /**
   * Specifies whether the user can de-select the claim on the consent screen (if such a feature is implemented in the consent screen).
   * @type {boolean}
   * @memberof ClaimResource
   */
  required: boolean;
  /**
   * Specifies whether the consent screen will emphasize this claim (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes.
   * @type {boolean}
   * @memberof ClaimResource
   */
  emphasize: boolean;
  /**
   * Specifies whether it\'s a built-in claim resource.
   * @type {boolean}
   * @memberof ClaimResource
   */
  is_default: boolean;
}
