import { PatchAccountProtectionUserLockoutOptionsRequest } from './patch-account-protection-user-lockout-options-request';

/**
 * The Patch Account Protection Options Request class
 * @export
 * @interface PatchAccountProtectionOptionsRequest
 */
export interface PatchAccountProtectionOptionsRequest {
  /**
   * Account Protection\'s User Lockout Options
   * @type {PatchAccountProtectionUserLockoutOptionsRequest}
   * @memberof PatchAccountProtectionOptionsRequest
   */
  user_lockout?: PatchAccountProtectionUserLockoutOptionsRequest;
}
