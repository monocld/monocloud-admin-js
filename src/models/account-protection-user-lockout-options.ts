import { AccountProtectionUserUnblockOptions } from './account-protection-user-unblock-options';
import { UserLockoutTypes } from './user-lockout-types';

/**
 * The Account Protection UserLockout response class
 * @export
 * @interface AccountProtectionUserLockoutOptions
 */
export interface AccountProtectionUserLockoutOptions {
  /**
   * Enable User Lockout
   * @type {boolean}
   * @memberof AccountProtectionUserLockoutOptions
   */
  enabled: boolean;
  /**
   * Maximum Number of failed attempts a user account can have before the user is locked out. The specified value is inclusive of the count.
   * @type {number}
   * @memberof AccountProtectionUserLockoutOptions
   */
  max_failed_access_attempts: number;
  /**
   * Lockout duration in minutes once a user account has been locked out.
   * @type {number}
   * @memberof AccountProtectionUserLockoutOptions
   */
  user_lockout_time_span: number;
  /**
   * Lockout duration in minutes once an Ip address has been locked out.
   * @type {number}
   * @memberof AccountProtectionUserLockoutOptions
   */
  ip_lockout_time_span: number;
  /**
   * Whitelisted IP Addresses where the Account Protection does not trigger.
   * @type {string[]}
   * @memberof AccountProtectionUserLockoutOptions
   */
  allowed_ips: string[];
  /**
   * Types of Lockouts to enable per User Account
   * @type {UserLockoutTypes}
   * @memberof AccountProtectionUserLockoutOptions
   */
  lockout_type: UserLockoutTypes;
  /**
   * Account Protection User Unblock Options
   * @type {AccountProtectionUserUnblockOptions}
   * @memberof AccountProtectionUserLockoutOptions
   */
  user_unblock: AccountProtectionUserUnblockOptions;
}
