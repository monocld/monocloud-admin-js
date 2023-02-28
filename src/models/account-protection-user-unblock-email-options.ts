/**
 * The Account Protection User Unblock Email response class
 * @export
 * @interface AccountProtectionUserUnblockEmailOptions
 */
export interface AccountProtectionUserUnblockEmailOptions {
  /**
   * Enable User Unblock through Email.
   * @type {boolean}
   * @memberof AccountProtectionUserUnblockEmailOptions
   */
  enabled: boolean;
  /**
   * Email expiration time in seconds.
   * @type {number}
   * @memberof AccountProtectionUserUnblockEmailOptions
   */
  link_expiry: number;
}
