import { AuthenticationGeneralEmailOptions } from './authentication-general-email-options';
import { AuthenticationGeneralPhoneOptions } from './authentication-general-phone-options';
import { AuthenticationGeneralSessionOptions } from './authentication-general-session-options';
import { AuthenticationGeneralUsernameOptions } from './authentication-general-username-options';
import { ExternalAuthenticators } from './external-authenticators';

/**
 * The Authentication General Options response class
 * @export
 * @interface AuthenticationGeneralOptions
 */
export interface AuthenticationGeneralOptions {
  /**
   * Since access tokens have finite lifetimes, refresh tokens allow requesting new access tokens without user interaction. The clients need to be explicitly authorized by the User to request for refresh tokens. This option specifies if all the clients need Consent from the User for Offline Access.
   * @type {boolean}
   * @memberof AuthenticationGeneralOptions
   */
  consent_required_for_offline_access: boolean;
  /**
   * If enabled, External SigIn Methods are shown on top and the Primary SigIn method is shown on bottom.
   * @type {boolean}
   * @memberof AuthenticationGeneralOptions
   */
  external_sign_in_methods_first: boolean;
  /**
   * Order of the External SigIn methods buttons
   * @type {ExternalAuthenticators[]}
   * @memberof AuthenticationGeneralOptions
   */
  external_sign_in_methods_order: ExternalAuthenticators[];
  /**
   * General User Session Options.
   * @type {AuthenticationGeneralSessionOptions}
   * @memberof AuthenticationGeneralOptions
   */
  session: AuthenticationGeneralSessionOptions;
  /**
   * General Email Requirement Options for Users
   * @type {AuthenticationGeneralEmailOptions}
   * @memberof AuthenticationGeneralOptions
   */
  email: AuthenticationGeneralEmailOptions;
  /**
   * General Phone Requirement Options for Users
   * @type {AuthenticationGeneralPhoneOptions}
   * @memberof AuthenticationGeneralOptions
   */
  phone: AuthenticationGeneralPhoneOptions;
  /**
   * General Username Requirement Options for Users
   * @type {AuthenticationGeneralUsernameOptions}
   * @memberof AuthenticationGeneralOptions
   */
  username: AuthenticationGeneralUsernameOptions;
}
