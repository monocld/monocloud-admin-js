import { PatchAuthenticationMethodPasswordExpirationOptionsRequest } from './patch-authentication-method-password-expiration-options-request';
import { PatchAuthenticationMethodPasswordRecoveryOptionsRequest } from './patch-authentication-method-password-recovery-options-request';
import { PatchAuthenticationMethodPasswordReuseOptionsRequest } from './patch-authentication-method-password-reuse-options-request';
import { PatchAuthenticationMethodPasswordStrengthOptionsRequest } from './patch-authentication-method-password-strength-options-request';

/**
 * The Patch Authentication Method Password Options Request class
 * @export
 * @interface PatchAuthenticationMethodPasswordOptionsRequest
 */
export interface PatchAuthenticationMethodPasswordOptionsRequest {
  /**
   * Enable Password Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable Password Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether to notify the user on successful password update through email.
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordOptionsRequest
   */
  enable_password_updated_email?: boolean;
  /**
   * Password Strength Options
   * @type {PatchAuthenticationMethodPasswordStrengthOptionsRequest}
   * @memberof PatchAuthenticationMethodPasswordOptionsRequest
   */
  strength?: PatchAuthenticationMethodPasswordStrengthOptionsRequest;
  /**
   * Password Re-use Options
   * @type {PatchAuthenticationMethodPasswordReuseOptionsRequest}
   * @memberof PatchAuthenticationMethodPasswordOptionsRequest
   */
  reuse?: PatchAuthenticationMethodPasswordReuseOptionsRequest;
  /**
   * Password Expiration Options
   * @type {PatchAuthenticationMethodPasswordExpirationOptionsRequest}
   * @memberof PatchAuthenticationMethodPasswordOptionsRequest
   */
  expiration?: PatchAuthenticationMethodPasswordExpirationOptionsRequest;
  /**
   * Password Recovery Options
   * @type {PatchAuthenticationMethodPasswordRecoveryOptionsRequest}
   * @memberof PatchAuthenticationMethodPasswordOptionsRequest
   */
  recovery?: PatchAuthenticationMethodPasswordRecoveryOptionsRequest;
}
