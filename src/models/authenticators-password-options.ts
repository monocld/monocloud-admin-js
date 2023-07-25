import { AuthenticatorsPasswordReuseOptions } from './authenticators-password-reuse-options';
import { AuthenticatorsPasswordStrengthOptions } from './authenticators-password-strength-options';

/**
 * The Password Authenticator Options response class
 * @export
 * @interface AuthenticatorsPasswordOptions
 */
export interface AuthenticatorsPasswordOptions {
  /**
   * Enable Password Sign-in
   * @type {boolean}
   * @memberof AuthenticatorsPasswordOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable Password Sign-up
   * @type {boolean}
   * @memberof AuthenticatorsPasswordOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether to notify the user on successful password update through email.
   * @type {boolean}
   * @memberof AuthenticatorsPasswordOptions
   */
  enable_password_updated_email: boolean;
  /**
   * If enabled password will be prompted on the same screen as the username.
   * @type {boolean}
   * @memberof AuthenticatorsPasswordOptions
   */
  prompt_password_on_initial_screen: boolean;
  /**
   * Password Strength Options
   * @type {AuthenticatorsPasswordStrengthOptions}
   * @memberof AuthenticatorsPasswordOptions
   */
  strength: AuthenticatorsPasswordStrengthOptions;
  /**
   * Password Re-use Options
   * @type {AuthenticatorsPasswordReuseOptions}
   * @memberof AuthenticatorsPasswordOptions
   */
  reuse: AuthenticatorsPasswordReuseOptions;
}
