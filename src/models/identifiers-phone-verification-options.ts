/**
 * The Phone Identifier Verification Options response class
 * @export
 * @interface IdentifiersPhoneVerificationOptions
 */
export interface IdentifiersPhoneVerificationOptions {
  /**
   * Specifies whether the phone should be verified at registration.
   * @type {boolean}
   * @memberof IdentifiersPhoneVerificationOptions
   */
  verify_at_sign_up: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof IdentifiersPhoneVerificationOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof IdentifiersPhoneVerificationOptions
   */
  code_length: number;
}
