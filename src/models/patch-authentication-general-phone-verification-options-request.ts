/**
 * The Patch General Phone Verification Options Request class
 * @export
 * @interface PatchAuthenticationGeneralPhoneVerificationOptionsRequest
 */
export interface PatchAuthenticationGeneralPhoneVerificationOptionsRequest {
  /**
   * Specifies whether the phone should be verified at registration.
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralPhoneVerificationOptionsRequest
   */
  verify_at_sign_up?: boolean;
  /**
   * Sms verification expiration time in seconds.
   * @type {number}
   * @memberof PatchAuthenticationGeneralPhoneVerificationOptionsRequest
   */
  expiration?: number;
  /**
   * Sms Code length is chosen from this option
   * @type {number}
   * @memberof PatchAuthenticationGeneralPhoneVerificationOptionsRequest
   */
  code_length?: number;
}
