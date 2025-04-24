/**
 * The Patch Api Resource Client class
 * @export
 * @interface PatchApiResourceClientRequest
 */
export interface PatchApiResourceClientRequest {
  /**
   * Specifies the api scopes the client is allowed to access (by default the client has access to all the resource scopes)
   * @type {string[]}
   * @memberof PatchApiResourceClientRequest
   */
  restricted_scopes?: string[];
}
