/**
 * The Tenants Private key Response Class
 * @export
 * @interface TenantPrivateKey
 */
export interface TenantPrivateKey {
  /**
   * Id of the Key
   * @type {string}
   * @memberof TenantPrivateKey
   */
  key_id: string;
  /**
   * Name Given by the customer (you) to identify the key
   * @type {string}
   * @memberof TenantPrivateKey
   */
  name?: string | null;
  /**
   * List of scopes of the key to modify the tenant
   * @type {Array<string>}
   * @memberof TenantPrivateKey
   */
  scopes: Array<string>;
  /**
   * Specifies expiration of the key in Epoch
   * @type {number}
   * @memberof TenantPrivateKey
   */
  expires_at: number;
}
