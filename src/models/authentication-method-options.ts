import { AuthenticationMethodEmailCodeOptions } from './authentication-method-email-code-options';
import { AuthenticationMethodMagicLinkOptions } from './authentication-method-magic-link-options';
import { AuthenticationMethodPasswordOptions } from './authentication-method-password-options';
import { AuthenticationMethodSmsCodeOptions } from './authentication-method-sms-code-options';

/**
 * The Authentication Method response class
 * @export
 * @interface AuthenticationMethodOptions
 */
export interface AuthenticationMethodOptions {
  /**
   * Password Authentication Method Settings
   * @type {AuthenticationMethodPasswordOptions}
   * @memberof AuthenticationMethodOptions
   */
  password: AuthenticationMethodPasswordOptions;
  /**
   * Sms Code Authentication Method Settings
   * @type {AuthenticationMethodSmsCodeOptions}
   * @memberof AuthenticationMethodOptions
   */
  sms_code: AuthenticationMethodSmsCodeOptions;
  /**
   * Magic Link Authentication Method Settings
   * @type {AuthenticationMethodMagicLinkOptions}
   * @memberof AuthenticationMethodOptions
   */
  magic_link: AuthenticationMethodMagicLinkOptions;
  /**
   * Email Code Authentication Method Settings
   * @type {AuthenticationMethodEmailCodeOptions}
   * @memberof AuthenticationMethodOptions
   */
  email_code: AuthenticationMethodEmailCodeOptions;
}
