import { AccountProtectionUserLockoutOptions } from './account-protection-user-lockout-options';

/**
 * The Account Protection response class
 * @export
 * @interface AccountProtectionOptions
 */
export interface AccountProtectionOptions {
  /**
   * Account Protection\'s User Lockout Options
   * @type {AccountProtectionUserLockoutOptions}
   * @memberof AccountProtectionOptions
   */
  user_lockout: AccountProtectionUserLockoutOptions;
}
