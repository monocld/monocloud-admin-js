import { PatchAccountProtectionUserUnblockOptionsRequest } from './patch-account-protection-user-unblock-options-request';
import { UserLockoutTypes } from './user-lockout-types';

/**
 * The Patch Account Protection User Lockout Options Request class
 * @export
 * @interface PatchAccountProtectionUserLockoutOptionsRequest
 */
export interface PatchAccountProtectionUserLockoutOptionsRequest {
  /**
   * Enable User Lockout
   * @type {boolean}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  enabled?: boolean;
  /**
   * Maximum Number of failed attempts a user account can have before the user is locked out. The specified value is inclusive of the count.
   * @type {number}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  max_failed_access_attempts?: number;
  /**
   * Lockout duration in minutes once a user account has been locked out.
   * @type {number}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  user_lockout_time_span?: number;
  /**
   * Lockout duration in minutes once an Ip address has been locked out.
   * @type {number}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  ip_lockout_time_span?: number;
  /**
   * Whitelisted IP Addresses where the Account Protection does not trigger.
   * @type {string[]}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  allowed_ips?: string[];
  /**
   * Types of Lockouts to enable per User Account
   * @type {UserLockoutTypes}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  lockout_type?: UserLockoutTypes;
  /**
   * Account Protection User Unblock Options
   * @type {PatchAccountProtectionUserUnblockOptionsRequest}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  user_unblock?: PatchAccountProtectionUserUnblockOptionsRequest;
}
