import { TenantPrivateKey } from './tenant-private-key';
import { TenantPublicKey } from './tenant-public-key';

/**
 * The Tenants Management Keys response class
 * @export
 * @interface TenantManagementKeys
 */
export interface TenantManagementKeys {
  /**
   * Tenants Public Key
   * @type {TenantPublicKey}
   * @memberof TenantManagementKeys
   */
  public_key: TenantPublicKey;
  /**
   * List of Tenant\'s Private Keys
   * @type {TenantPrivateKey[]}
   * @memberof TenantManagementKeys
   */
  private_keys: TenantPrivateKey[];
}
