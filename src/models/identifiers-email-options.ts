import { IdentifiersEmailVerificationOptions } from './identifiers-email-verification-options';

/**
 * The Email Identifier Options response class
 * @export
 * @interface IdentifiersEmailOptions
 */
export interface IdentifiersEmailOptions {
  /**
   * Specifies if the users are allowed to sign-in using an email
   * @type {boolean}
   * @memberof IdentifiersEmailOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies if the users are allowed to enter an email at the time of registration.
   * @type {boolean}
   * @memberof IdentifiersEmailOptions
   */
  show_at_sign_up: boolean;
  /**
   * Specifies if the email is required at the time of registration.
   * @type {boolean}
   * @memberof IdentifiersEmailOptions
   */
  required_at_sign_up: boolean;
  /**
   * Email verification related to Sign Up
   * @type {IdentifiersEmailVerificationOptions}
   * @memberof IdentifiersEmailOptions
   */
  verification: IdentifiersEmailVerificationOptions;
}
