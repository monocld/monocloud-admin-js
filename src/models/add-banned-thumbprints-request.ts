/**
 * Banned Thumbprints Request.
 * @export
 * @interface AddBannedThumbprintsRequest
 */
export interface AddBannedThumbprintsRequest {
  /**
   * List of banned certificate thumbprints.
   * @type {string[]}
   * @memberof AddBannedThumbprintsRequest
   */
  banned_thumbprints: string[];
}
