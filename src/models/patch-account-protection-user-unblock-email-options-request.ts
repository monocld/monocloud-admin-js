/**
 * The Patch account protection user unblock email options request class
 * @export
 * @interface PatchAccountProtectionUserUnblockEmailOptionsRequest
 */
export interface PatchAccountProtectionUserUnblockEmailOptionsRequest {
  /**
   * Enable User Unblock through Email.
   * @type {boolean}
   * @memberof PatchAccountProtectionUserUnblockEmailOptionsRequest
   */
  enabled?: boolean;
  /**
   * Email expiration time in seconds.
   * @type {number}
   * @memberof PatchAccountProtectionUserUnblockEmailOptionsRequest
   */
  link_expiry?: number;
}
