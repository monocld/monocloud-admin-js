import { AuthenticationGeneralPhoneVerificationOptions } from './authentication-general-phone-verification-options';

/**
 * The Authentication General Phone response class
 * @export
 * @interface AuthenticationGeneralPhoneOptions
 */
export interface AuthenticationGeneralPhoneOptions {
  /**
   * Specifies if the users are allowed to sign-in using a phone number
   * @type {boolean}
   * @memberof AuthenticationGeneralPhoneOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies if the users are allowed to enter a phone number at the time of registration.
   * @type {boolean}
   * @memberof AuthenticationGeneralPhoneOptions
   */
  show_at_sign_up: boolean;
  /**
   * Specifies if the phone number is required at the time of registration.
   * @type {boolean}
   * @memberof AuthenticationGeneralPhoneOptions
   */
  required_at_sign_up: boolean;
  /**
   * Sms verification related to Sign Up
   * @type {AuthenticationGeneralPhoneVerificationOptions}
   * @memberof AuthenticationGeneralPhoneOptions
   */
  verification: AuthenticationGeneralPhoneVerificationOptions;
}
