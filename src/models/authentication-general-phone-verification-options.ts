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
   * Sms verification expiration time in seconds.
   * @type {number}
   * @memberof AuthenticationGeneralPhoneVerificationOptions
   */
  expiration: number;
  /**
   * Sms Code length is chosen from this option
   * @type {number}
   * @memberof AuthenticationGeneralPhoneVerificationOptions
   */
  code_length: number;
}
