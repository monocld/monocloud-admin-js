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
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof PatchAuthenticationGeneralEmailVerificationOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchAuthenticationGeneralEmailVerificationOptionsRequest
   */
  code_length?: number;
}
