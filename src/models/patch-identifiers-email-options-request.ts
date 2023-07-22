import { PatchIdentifiersEmailVerificationOptionsRequest } from './patch-identifiers-email-verification-options-request';

/**
 * The Patch Email Identifier Options Request class
 * @export
 * @interface PatchIdentifiersEmailOptionsRequest
 */
export interface PatchIdentifiersEmailOptionsRequest {
  /**
   * Specifies if the users are allowed to sign-in using an email
   * @type {boolean}
   * @memberof PatchIdentifiersEmailOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies if the users are allowed to enter an email at the time of registration.
   * @type {boolean}
   * @memberof PatchIdentifiersEmailOptionsRequest
   */
  show_at_sign_up?: boolean;
  /**
   * Specifies if the email is required at the time of registration.
   * @type {boolean}
   * @memberof PatchIdentifiersEmailOptionsRequest
   */
  required_at_sign_up?: boolean;
  /**
   * Email verification related to Sign Up
   * @type {PatchIdentifiersEmailVerificationOptionsRequest}
   * @memberof PatchIdentifiersEmailOptionsRequest
   */
  verification?: PatchIdentifiersEmailVerificationOptionsRequest;
}
