import { PatchAuthenticationGeneralPhoneVerificationOptionsRequest } from './patch-authentication-general-phone-verification-options-request';

/**
 * The Patch General Phone Authentication Options Request class
 * @export
 * @interface PatchAuthenticationGeneralPhoneOptionsRequest
 */
export interface PatchAuthenticationGeneralPhoneOptionsRequest {
  /**
   * Specifies if the users are allowed to sign-in using a phone number
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralPhoneOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies if the users are allowed to enter a phone number at the time of registration.
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralPhoneOptionsRequest
   */
  show_at_sign_up?: boolean;
  /**
   * Specifies if the phone number is required at the time of registration.
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralPhoneOptionsRequest
   */
  required_at_sign_up?: boolean;
  /**
   * Phone verification related to Sign Up
   * @type {PatchAuthenticationGeneralPhoneVerificationOptionsRequest}
   * @memberof PatchAuthenticationGeneralPhoneOptionsRequest
   */
  verification?: PatchAuthenticationGeneralPhoneVerificationOptionsRequest;
}
