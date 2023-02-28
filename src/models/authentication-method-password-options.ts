import { AuthenticationMethodPasswordExpirationOptions } from './authentication-method-password-expiration-options';
import { AuthenticationMethodPasswordRecoveryOptions } from './authentication-method-password-recovery-options';
import { AuthenticationMethodPasswordReuseOptions } from './authentication-method-password-reuse-options';
import { AuthenticationMethodPasswordStrengthOptions } from './authentication-method-password-strength-options';

/**
 * The Authentication Method Password Options response class
 * @export
 * @interface AuthenticationMethodPasswordOptions
 */
export interface AuthenticationMethodPasswordOptions {
  /**
   * Enable Password Sign-in
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable Password Sign-up
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether to notify the user on successful password update through email.
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordOptions
   */
  enable_password_updated_email: boolean;
  /**
   * Password Strength Options
   * @type {AuthenticationMethodPasswordStrengthOptions}
   * @memberof AuthenticationMethodPasswordOptions
   */
  strength: AuthenticationMethodPasswordStrengthOptions;
  /**
   * Password Re-use Options
   * @type {AuthenticationMethodPasswordReuseOptions}
   * @memberof AuthenticationMethodPasswordOptions
   */
  reuse: AuthenticationMethodPasswordReuseOptions;
  /**
   * Password Expiration Options
   * @type {AuthenticationMethodPasswordExpirationOptions}
   * @memberof AuthenticationMethodPasswordOptions
   */
  expiration: AuthenticationMethodPasswordExpirationOptions;
  /**
   * Password Recovery Options
   * @type {AuthenticationMethodPasswordRecoveryOptions}
   * @memberof AuthenticationMethodPasswordOptions
   */
  recovery: AuthenticationMethodPasswordRecoveryOptions;
}
