import { PatchAuthenticationGeneralEmailOptionsRequest } from './patch-authentication-general-email-options-request';
import { PatchAuthenticationGeneralPhoneOptionsRequest } from './patch-authentication-general-phone-options-request';
import { PatchAuthenticationGeneralSessionOptionsRequest } from './patch-authentication-general-session-options-request';
import { PatchAuthenticationGeneralUsernameOptionsRequest } from './patch-authentication-general-username-options-request';

/**
 * The Patch General Authentication Options Request class
 * @export
 * @interface PatchAuthenticationGeneralOptionsOptionsRequest
 */
export interface PatchAuthenticationGeneralOptionsOptionsRequest {
  /**
   * Since access tokens have finite lifetimes, refresh tokens allow requesting new access tokens without user interaction. The clients need to be explicitly authorized by the User to request for refresh tokens. This option specifies if all the clients need Consent from the User for Offline Access.
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralOptionsOptionsRequest
   */
  consent_required_for_offline_access?: boolean;
  /**
   * General User Session Options.
   * @type {PatchAuthenticationGeneralSessionOptionsRequest}
   * @memberof PatchAuthenticationGeneralOptionsOptionsRequest
   */
  session?: PatchAuthenticationGeneralSessionOptionsRequest;
  /**
   * General Email Requirement Options for Users
   * @type {PatchAuthenticationGeneralEmailOptionsRequest}
   * @memberof PatchAuthenticationGeneralOptionsOptionsRequest
   */
  email?: PatchAuthenticationGeneralEmailOptionsRequest;
  /**
   * General Phone Requirement Options for Users
   * @type {PatchAuthenticationGeneralPhoneOptionsRequest}
   * @memberof PatchAuthenticationGeneralOptionsOptionsRequest
   */
  phone?: PatchAuthenticationGeneralPhoneOptionsRequest;
  /**
   * General Username Requirement Options for Users
   * @type {PatchAuthenticationGeneralUsernameOptionsRequest}
   * @memberof PatchAuthenticationGeneralOptionsOptionsRequest
   */
  username?: PatchAuthenticationGeneralUsernameOptionsRequest;
}
