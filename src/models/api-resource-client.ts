/**
 * The Api Resource Client response
 * @export
 * @interface ApiResourceClient
 */
export interface ApiResourceClient {
  /**
   * The resource Id
   * @type {string}
   * @memberof ApiResourceClient
   */
  resource_id: string;
  /**
   * The client ID
   * @type {string}
   * @memberof ApiResourceClient
   */
  client_id: string;
  /**
   * Specifies the api scopes the client is allowed to access (by default the client has access to all the resource scopes)
   * @type {string[]}
   * @memberof ApiResourceClient
   */
  restricted_scopes: string[];
  /**
   * Specifies the creation time of the client group (in Epoch).
   * @type {number}
   * @memberof ApiResourceClient
   */
  creation_time: number;
  /**
   * Specifies the creation time of the client group (in Epoch).
   * @type {number}
   * @memberof ApiResourceClient
   */
  last_updated: number;
}
