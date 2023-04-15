import { PatchAuthenticationMethodEmailOptionsRequest } from './patch-authentication-method-email-options-request';
import { PatchAuthenticationMethodPasswordOptionsRequest } from './patch-authentication-method-password-options-request';
import { PatchAuthenticationMethodPhoneOptionsRequest } from './patch-authentication-method-phone-options-request';

/**
 * The Patch Authentication Method Options Request class
 * @export
 * @interface PatchAuthenticationMethodOptionsRequest
 */
export interface PatchAuthenticationMethodOptionsRequest {
  /**
   * Password Authentication Method Settings
   * @type {PatchAuthenticationMethodPasswordOptionsRequest}
   * @memberof PatchAuthenticationMethodOptionsRequest
   */
  password?: PatchAuthenticationMethodPasswordOptionsRequest;
  /**
   * Phone Authentication Method Settings
   * @type {PatchAuthenticationMethodPhoneOptionsRequest}
   * @memberof PatchAuthenticationMethodOptionsRequest
   */
  phone?: PatchAuthenticationMethodPhoneOptionsRequest;
  /**
   * Email Authentication Method Settings
   * @type {PatchAuthenticationMethodEmailOptionsRequest}
   * @memberof PatchAuthenticationMethodOptionsRequest
   */
  email?: PatchAuthenticationMethodEmailOptionsRequest;
}
