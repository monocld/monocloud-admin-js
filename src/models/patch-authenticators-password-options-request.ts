import { PatchAuthenticatorsPasswordReuseOptionsRequest } from './patch-authenticators-password-reuse-options-request';
import { PatchAuthenticatorsPasswordStrengthOptionsRequest } from './patch-authenticators-password-strength-options-request';

/**
 * The Patch Password Authenticator Options Request class
 * @export
 * @interface PatchAuthenticatorsPasswordOptionsRequest
 */
export interface PatchAuthenticatorsPasswordOptionsRequest {
  /**
   * Enable Password Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasswordOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable Password Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasswordOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * If enabled password will be prompted on the same screen as the username.
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasswordOptionsRequest
   */
  prompt_password_on_initial_screen?: boolean;
  /**
   * Specifies the expiration period of the password (in days)
   * @type {number}
   * @memberof PatchAuthenticatorsPasswordOptionsRequest
   */
  expiry?: number | null;
  /**
   * Password Strength Options
   * @type {PatchAuthenticatorsPasswordStrengthOptionsRequest}
   * @memberof PatchAuthenticatorsPasswordOptionsRequest
   */
  strength?: PatchAuthenticatorsPasswordStrengthOptionsRequest;
  /**
   * Password Re-use Options
   * @type {PatchAuthenticatorsPasswordReuseOptionsRequest}
   * @memberof PatchAuthenticatorsPasswordOptionsRequest
   */
  reuse?: PatchAuthenticatorsPasswordReuseOptionsRequest;
}
