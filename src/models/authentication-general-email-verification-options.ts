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
   * Email expiration time in seconds.
   * @type {number}
   * @memberof AuthenticationGeneralEmailVerificationOptions
   */
  expiration: number;
  /**
   * If Email Code is Selected, Code length is chosen from this option
   * @type {number}
   * @memberof AuthenticationGeneralEmailVerificationOptions
   */
  code_length: number;
}
