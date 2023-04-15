/**
 * The Authentication General Phone Verification Options Response class
 * @export
 * @interface AuthenticationGeneralPhoneVerificationOptions
 */
export interface AuthenticationGeneralPhoneVerificationOptions {
  /**
   * Specifies whether the phone should be verified at registration.
   * @type {boolean}
   * @memberof AuthenticationGeneralPhoneVerificationOptions
   */
  verify_at_sign_up: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof AuthenticationGeneralPhoneVerificationOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof AuthenticationGeneralPhoneVerificationOptions
   */
  code_length: number;
}
