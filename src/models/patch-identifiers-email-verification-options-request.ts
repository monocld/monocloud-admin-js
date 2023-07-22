import { VerificationTypes } from './verification-types';

/**
 * The Patch Email Identifier Verification Options Request class
 * @export
 * @interface PatchIdentifiersEmailVerificationOptionsRequest
 */
export interface PatchIdentifiersEmailVerificationOptionsRequest {
  /**
   * Specifies whether the email should be verified at registration.
   * @type {boolean}
   * @memberof PatchIdentifiersEmailVerificationOptionsRequest
   */
  verify_at_sign_up?: boolean;
  /**
   * Specifies the type of verification tokens to be sent
   * @type {VerificationTypes}
   * @memberof PatchIdentifiersEmailVerificationOptionsRequest
   */
  verification_type?: VerificationTypes;
  /**
   * Allow sign up/sign in flow to resume in a different browser
   * @type {boolean}
   * @memberof PatchIdentifiersEmailVerificationOptionsRequest
   */
  allow_cross_browser?: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof PatchIdentifiersEmailVerificationOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchIdentifiersEmailVerificationOptionsRequest
   */
  code_length?: number;
}
