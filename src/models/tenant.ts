import { TenantManagementKeys } from './tenant-management-keys';
import { TenantRegion } from './tenant-region';

/**
 * The Tenants response class
 * @export
 * @interface Tenant
 */
export interface Tenant {
  /**
   * Tenant Id
   * @type {string}
   * @memberof Tenant
   */
  id: string;
  /**
   * If the domain is myapp, the full Auth server url will look like https://myapp.monocloud.com
   * @type {string}
   * @memberof Tenant
   */
  domain_name: string;
  /**
   * Project Name
   * @type {string}
   * @memberof Tenant
   */
  project_name: string;
  /**
   * Tenant Region
   * @type {TenantRegion}
   * @memberof Tenant
   */
  region: TenantRegion;
  /**
   * Tenant\'s management Keys
   * @type {TenantManagementKeys}
   * @memberof Tenant
   */
  management_keys: TenantManagementKeys;
  /**
   * Specifies the creation time of the tenant (in Epoch).
   * @type {number}
   * @memberof Tenant
   */
  creation_time: number;
  /**
   * Specifies the last updated time of the tenant (in Epoch).
   * @type {number}
   * @memberof Tenant
   */
  last_updated: number;
}
