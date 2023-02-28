import { PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest } from './patch-authentication-method-password-recovery-email-options-request';
import { PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest } from './patch-authentication-method-password-recovery-phone-options-request';

/**
 * The Patch authentication method password recovery options request class
 * @export
 * @interface PatchAuthenticationMethodPasswordRecoveryOptionsRequest
 */
export interface PatchAuthenticationMethodPasswordRecoveryOptionsRequest {
  /**
   * Password Recovery Email Options
   * @type {PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest}
   * @memberof PatchAuthenticationMethodPasswordRecoveryOptionsRequest
   */
  email?: PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest;
  /**
   * Password Recovery Phone Options
   * @type {PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest}
   * @memberof PatchAuthenticationMethodPasswordRecoveryOptionsRequest
   */
  phone?: PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest;
}
