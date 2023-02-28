/**
 * The Patch General Email Verification Options Request class
 * @export
 * @interface PatchAuthenticationGeneralEmailVerificationOptionsRequest
 */
export interface PatchAuthenticationGeneralEmailVerificationOptionsRequest {
  /**
   * Specifies whether the email should be verified at registration.
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralEmailVerificationOptionsRequest
   */
  verify_at_sign_up?: boolean;
  /**
   * Email expiration time in seconds.
   * @type {number}
   * @memberof PatchAuthenticationGeneralEmailVerificationOptionsRequest
   */
  expiration?: number;
  /**
   * If Email Code is Selected, Code length is chosen from this option
   * @type {number}
   * @memberof PatchAuthenticationGeneralEmailVerificationOptionsRequest
   */
  code_length?: number;
}
