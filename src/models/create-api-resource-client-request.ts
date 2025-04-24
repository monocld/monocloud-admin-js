/**
 * The Create Api Resource Client Request
 * @export
 * @interface CreateApiResourceClientRequest
 */
export interface CreateApiResourceClientRequest {
  /**
   * Specifies the api scopes the client is allowed to access (by default the client has access to all the resource scopes)
   * @type {string[]}
   * @memberof CreateApiResourceClientRequest
   */
  restricted_scopes?: string[];
}
