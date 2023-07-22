import { VerificationTypes } from './verification-types';

/**
 * The Email Authenticator Options response class
 * @export
 * @interface AuthenticatorsEmailOptions
 */
export interface AuthenticatorsEmailOptions {
  /**
   * Enable Email Sign-in
   * @type {boolean}
   * @memberof AuthenticatorsEmailOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable Email Sign-up
   * @type {boolean}
   * @memberof AuthenticatorsEmailOptions
   */
  enable_sign_up: boolean;
  /**
   * Enable Email Jit Provisioning
   * @type {boolean}
   * @memberof AuthenticatorsEmailOptions
   */
  enable_jit_provisioning: boolean;
  /**
   * Specifies the type of verification tokens to be sent
   * @type {VerificationTypes}
   * @memberof AuthenticatorsEmailOptions
   */
  verification_type: VerificationTypes;
  /**
   * Allow sign up/sign in flow to resume in a different browser
   * @type {boolean}
   * @memberof AuthenticatorsEmailOptions
   */
  allow_cross_browser: boolean;
  /**
   * Specifies the expiration period of the email (in seconds)
   * @type {number}
   * @memberof AuthenticatorsEmailOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof AuthenticatorsEmailOptions
   */
  code_length: number;
}
