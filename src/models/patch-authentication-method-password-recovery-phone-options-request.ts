/**
 * The Patch authentication method password recovery phone options request class
 * @export
 * @interface PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest
 */
export interface PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest {
  /**
   * Enable Password recovery through Phone.
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest
   */
  enabled?: boolean;
  /**
   * Code expiration time in seconds.
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest
   */
  otp_expiry?: number;
  /**
   * Code length is chosen from this option
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest
   */
  otp_length?: number;
}
