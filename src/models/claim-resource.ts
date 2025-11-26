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
   * The unique name of the claim.
   * @type {string}
   * @memberof ClaimResource
   */
  name: string;
  /**
   * Specifies the source of the claim.
   * @type {string}
   * @memberof ClaimResource
   */
  source: string;
  /**
   * Specifies whether it\'s a built-in claim resource.
   * @type {boolean}
   * @memberof ClaimResource
   */
  is_default: boolean;
}
