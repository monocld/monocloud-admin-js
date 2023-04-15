import { AuthenticationMethodEmailOptions } from './authentication-method-email-options';
import { AuthenticationMethodPasswordOptions } from './authentication-method-password-options';
import { AuthenticationMethodPhoneOptions } from './authentication-method-phone-options';

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
   * Phone Authentication Method Settings
   * @type {AuthenticationMethodPhoneOptions}
   * @memberof AuthenticationMethodOptions
   */
  phone: AuthenticationMethodPhoneOptions;
  /**
   * Email Authentication Method Settings
   * @type {AuthenticationMethodEmailOptions}
   * @memberof AuthenticationMethodOptions
   */
  email: AuthenticationMethodEmailOptions;
}
