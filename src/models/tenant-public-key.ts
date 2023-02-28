/**
 * The Tenants Public key Response Class
 * @export
 * @interface TenantPublicKey
 */
export interface TenantPublicKey {
  /**
   * Id of the Key
   * @type {string}
   * @memberof TenantPublicKey
   */
  key_id: string;
  /**
   * Specifies expiration of the key
   * @type {number}
   * @memberof TenantPublicKey
   */
  expires_at: number;
}
