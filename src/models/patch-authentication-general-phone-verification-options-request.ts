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
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof PatchAuthenticationGeneralPhoneVerificationOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchAuthenticationGeneralPhoneVerificationOptionsRequest
   */
  code_length?: number;
}
