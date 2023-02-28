import { AuthenticationMethodPasswordRecoveryEmailOptions } from './authentication-method-password-recovery-email-options';
import { AuthenticationMethodPasswordRecoveryPhoneOptions } from './authentication-method-password-recovery-phone-options';

/**
 * The Authentication Method Password Recovery response class
 * @export
 * @interface AuthenticationMethodPasswordRecoveryOptions
 */
export interface AuthenticationMethodPasswordRecoveryOptions {
  /**
   * Password Recovery Email Options
   * @type {AuthenticationMethodPasswordRecoveryEmailOptions}
   * @memberof AuthenticationMethodPasswordRecoveryOptions
   */
  email: AuthenticationMethodPasswordRecoveryEmailOptions;
  /**
   * Password Recovery Phone Options
   * @type {AuthenticationMethodPasswordRecoveryPhoneOptions}
   * @memberof AuthenticationMethodPasswordRecoveryOptions
   */
  phone: AuthenticationMethodPasswordRecoveryPhoneOptions;
}
