import { PatchAuthenticationMethodEmailCodeOptionsRequest } from './patch-authentication-method-email-code-options-request';
import { PatchAuthenticationMethodMagicLinkOptionsRequest } from './patch-authentication-method-magic-link-options-request';
import { PatchAuthenticationMethodPasswordOptionsRequest } from './patch-authentication-method-password-options-request';
import { PatchAuthenticationMethodSmsCodeOptionsRequest } from './patch-authentication-method-sms-code-options-request';

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
   * Sms Code Authentication Method Settings
   * @type {PatchAuthenticationMethodSmsCodeOptionsRequest}
   * @memberof PatchAuthenticationMethodOptionsRequest
   */
  sms_code?: PatchAuthenticationMethodSmsCodeOptionsRequest;
  /**
   * Magic Link Authentication Method Settings
   * @type {PatchAuthenticationMethodMagicLinkOptionsRequest}
   * @memberof PatchAuthenticationMethodOptionsRequest
   */
  magic_link?: PatchAuthenticationMethodMagicLinkOptionsRequest;
  /**
   * Email Code Authentication Method Settings
   * @type {PatchAuthenticationMethodEmailCodeOptionsRequest}
   * @memberof PatchAuthenticationMethodOptionsRequest
   */
  email_code?: PatchAuthenticationMethodEmailCodeOptionsRequest;
}
