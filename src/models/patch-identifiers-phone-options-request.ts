import { PatchIdentifiersPhoneVerificationOptionsRequest } from './patch-identifiers-phone-verification-options-request';

/**
 * The Patch Phone Identifier Options Request class
 * @export
 * @interface PatchIdentifiersPhoneOptionsRequest
 */
export interface PatchIdentifiersPhoneOptionsRequest {
  /**
   * Specifies if the users are allowed to sign-in using a phone number
   * @type {boolean}
   * @memberof PatchIdentifiersPhoneOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies if the users are allowed to enter a phone number at the time of registration.
   * @type {boolean}
   * @memberof PatchIdentifiersPhoneOptionsRequest
   */
  show_at_sign_up?: boolean;
  /**
   * Specifies if the phone number is required at the time of registration.
   * @type {boolean}
   * @memberof PatchIdentifiersPhoneOptionsRequest
   */
  required_at_sign_up?: boolean;
  /**
   * Phone verification related to Sign Up
   * @type {PatchIdentifiersPhoneVerificationOptionsRequest}
   * @memberof PatchIdentifiersPhoneOptionsRequest
   */
  verification?: PatchIdentifiersPhoneVerificationOptionsRequest;
}
