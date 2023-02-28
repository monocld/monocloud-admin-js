import { PatchAuthenticationGeneralEmailVerificationOptionsRequest } from './patch-authentication-general-email-verification-options-request';

/**
 * The Patch General Email Authentication Options Request class
 * @export
 * @interface PatchAuthenticationGeneralEmailOptionsRequest
 */
export interface PatchAuthenticationGeneralEmailOptionsRequest {
  /**
   * Specifies if the users are allowed to sign-in using an email
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralEmailOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies if the users are allowed to enter an email at the time of registration.
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralEmailOptionsRequest
   */
  show_at_sign_up?: boolean;
  /**
   * Specifies if the email is required at the time of registration.
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralEmailOptionsRequest
   */
  required_at_sign_up?: boolean;
  /**
   * Email verification related to Sign Up
   * @type {PatchAuthenticationGeneralEmailVerificationOptionsRequest}
   * @memberof PatchAuthenticationGeneralEmailOptionsRequest
   */
  verification?: PatchAuthenticationGeneralEmailVerificationOptionsRequest;
}
