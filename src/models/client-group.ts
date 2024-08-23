/**
 * The Client Group response class
 * @export
 * @interface ClientGroup
 */
export interface ClientGroup {
  /**
   * Unique ID of the group
   * @type {string}
   * @memberof ClientGroup
   */
  group_id: string;
  /**
   * The client ID
   * @type {string}
   * @memberof ClientGroup
   */
  client_id: string;
  /**
   * The group name
   * @type {string}
   * @memberof ClientGroup
   */
  group_name: string;
  /**
   * Specifies the creation time of the client group (in Epoch).
   * @type {number}
   * @memberof ClientGroup
   */
  creation_time: number;
}
