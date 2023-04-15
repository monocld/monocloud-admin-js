import { VerificationTypes } from './verification-types';

/**
 * The Authentication Method Email response class
 * @export
 * @interface AuthenticationMethodEmailOptions
 */
export interface AuthenticationMethodEmailOptions {
  /**
   * Enable Email Sign-in
   * @type {boolean}
   * @memberof AuthenticationMethodEmailOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable Email Sign-up
   * @type {boolean}
   * @memberof AuthenticationMethodEmailOptions
   */
  enable_sign_up: boolean;
  /**
   * Enable Email Enable Jit Provisioning
   * @type {boolean}
   * @memberof AuthenticationMethodEmailOptions
   */
  enable_jit_provisioning: boolean;
  /**
   * Specifies the type of verification tokens to be sent
   * @type {VerificationTypes}
   * @memberof AuthenticationMethodEmailOptions
   */
  verification_type: VerificationTypes;
  /**
   * Allow sign up/sign in flow to resume in a different browser
   * @type {boolean}
   * @memberof AuthenticationMethodEmailOptions
   */
  allow_cross_browser: boolean;
  /**
   * Specifies the expiration period of the email (in seconds)
   * @type {number}
   * @memberof AuthenticationMethodEmailOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof AuthenticationMethodEmailOptions
   */
  code_length: number;
}
