import { VerificationTypes } from './verification-types';

/**
 * The Email Identifier Verification Options response class
 * @export
 * @interface IdentifiersEmailVerificationOptions
 */
export interface IdentifiersEmailVerificationOptions {
  /**
   * Specifies whether the email should be verified at registration.
   * @type {boolean}
   * @memberof IdentifiersEmailVerificationOptions
   */
  verify_at_sign_up: boolean;
  /**
   * Specifies the type of verification tokens to be sent
   * @type {VerificationTypes}
   * @memberof IdentifiersEmailVerificationOptions
   */
  verification_type: VerificationTypes;
  /**
   * Allow sign up/sign in flow to resume in a different browser
   * @type {boolean}
   * @memberof IdentifiersEmailVerificationOptions
   */
  allow_cross_browser: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof IdentifiersEmailVerificationOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof IdentifiersEmailVerificationOptions
   */
  code_length: number;
}
