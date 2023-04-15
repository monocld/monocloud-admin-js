/**
 * The Authentication General Email Verification Options Response class
 * @export
 * @interface AuthenticationGeneralEmailVerificationOptions
 */
export interface AuthenticationGeneralEmailVerificationOptions {
  /**
   * Specifies whether the email should be verified at registration.
   * @type {boolean}
   * @memberof AuthenticationGeneralEmailVerificationOptions
   */
  verify_at_sign_up: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof AuthenticationGeneralEmailVerificationOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof AuthenticationGeneralEmailVerificationOptions
   */
  code_length: number;
}
