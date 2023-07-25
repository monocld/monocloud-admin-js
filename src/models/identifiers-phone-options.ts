import { IdentifiersPhoneVerificationOptions } from './identifiers-phone-verification-options';

/**
 * The Phone Identifier Options response class
 * @export
 * @interface IdentifiersPhoneOptions
 */
export interface IdentifiersPhoneOptions {
  /**
   * Specifies if the users are allowed to sign-in using a phone number
   * @type {boolean}
   * @memberof IdentifiersPhoneOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies if the users are allowed to enter a phone number at the time of registration.
   * @type {boolean}
   * @memberof IdentifiersPhoneOptions
   */
  show_at_sign_up: boolean;
  /**
   * Specifies if the phone number is required at the time of registration.
   * @type {boolean}
   * @memberof IdentifiersPhoneOptions
   */
  required_at_sign_up: boolean;
  /**
   * Phone verification related to Sign Up
   * @type {IdentifiersPhoneVerificationOptions}
   * @memberof IdentifiersPhoneOptions
   */
  verification: IdentifiersPhoneVerificationOptions;
}
