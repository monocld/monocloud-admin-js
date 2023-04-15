import { VerificationTypes } from './verification-types';

/**
 * The Patch Authentication Method Email Options Request class
 * @export
 * @interface PatchAuthenticationMethodEmailOptionsRequest
 */
export interface PatchAuthenticationMethodEmailOptionsRequest {
  /**
   * Enable Email Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticationMethodEmailOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable Email Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticationMethodEmailOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Enable Email Enable Jit Provisioning
   * @type {boolean}
   * @memberof PatchAuthenticationMethodEmailOptionsRequest
   */
  enable_jit_provisioning?: boolean;
  /**
   * Specifies the type of verification tokens to be sent
   * @type {VerificationTypes}
   * @memberof PatchAuthenticationMethodEmailOptionsRequest
   */
  verification_type?: VerificationTypes;
  /**
   * Allow sign up/sign in flow to resume in a different browser
   * @type {boolean}
   * @memberof PatchAuthenticationMethodEmailOptionsRequest
   */
  allow_cross_browser?: boolean;
  /**
   * Specifies the expiration period of the email (in seconds)
   * @type {number}
   * @memberof PatchAuthenticationMethodEmailOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchAuthenticationMethodEmailOptionsRequest
   */
  code_length?: number;
}
