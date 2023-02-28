import { AuthenticationGeneralEmailVerificationOptions } from './authentication-general-email-verification-options';

/**
 * The Authentication General Email response class
 * @export
 * @interface AuthenticationGeneralEmailOptions
 */
export interface AuthenticationGeneralEmailOptions {
  /**
   * Specifies if the users are allowed to sign-in using an email
   * @type {boolean}
   * @memberof AuthenticationGeneralEmailOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies if the users are allowed to enter an email at the time of registration.
   * @type {boolean}
   * @memberof AuthenticationGeneralEmailOptions
   */
  show_at_sign_up: boolean;
  /**
   * Specifies if the email is required at the time of registration.
   * @type {boolean}
   * @memberof AuthenticationGeneralEmailOptions
   */
  required_at_sign_up: boolean;
  /**
   * Email verification related to Sign Up
   * @type {AuthenticationGeneralEmailVerificationOptions}
   * @memberof AuthenticationGeneralEmailOptions
   */
  verification: AuthenticationGeneralEmailVerificationOptions;
}
