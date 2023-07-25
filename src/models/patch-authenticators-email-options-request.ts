import { VerificationTypes } from './verification-types';

/**
 * The Patch Email Authenticator Options Request class
 * @export
 * @interface PatchAuthenticatorsEmailOptionsRequest
 */
export interface PatchAuthenticatorsEmailOptionsRequest {
  /**
   * Enable Email Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticatorsEmailOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable Email Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticatorsEmailOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Enable Email Jit Provisioning
   * @type {boolean}
   * @memberof PatchAuthenticatorsEmailOptionsRequest
   */
  enable_jit_provisioning?: boolean;
  /**
   * Specifies the type of verification tokens to be sent
   * @type {VerificationTypes}
   * @memberof PatchAuthenticatorsEmailOptionsRequest
   */
  verification_type?: VerificationTypes;
  /**
   * Allow sign up/sign in flow to resume in a different browser
   * @type {boolean}
   * @memberof PatchAuthenticatorsEmailOptionsRequest
   */
  allow_cross_browser?: boolean;
  /**
   * Specifies the expiration period of the email (in seconds)
   * @type {number}
   * @memberof PatchAuthenticatorsEmailOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchAuthenticatorsEmailOptionsRequest
   */
  code_length?: number;
}
