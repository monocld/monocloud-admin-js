import { PatchAccountProtectionOptionsRequest } from './patch-account-protection-options-request';
import { PatchAuthenticatorsOptionsRequest } from './patch-authenticators-options-request';
import { PatchConsentOptionsRequest } from './patch-consent-options-request';
import { PatchIdentifiersOptionsRequest } from './patch-identifiers-options-request';
import { PatchLogoutOptionsRequest } from './patch-logout-options-request';
import { PatchRecoveryMethodsOptionsRequest } from './patch-recovery-methods-options-request';
import { PatchSessionOptionsRequest } from './patch-session-options-request';
import { PatchSignUpOptionsRequest } from './patch-sign-up-options-request';

/**
 * The Patch Authentication Options Request class
 * @export
 * @interface PatchAuthenticationOptionsRequest
 */
export interface PatchAuthenticationOptionsRequest {
  /**
   * Account Protection Options
   * @type {PatchAccountProtectionOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  account_protection?: PatchAccountProtectionOptionsRequest;
  /**
   * Authenticators Options
   * @type {PatchAuthenticatorsOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  authenticators?: PatchAuthenticatorsOptionsRequest;
  /**
   * Identifiers Options
   * @type {PatchIdentifiersOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  identifiers?: PatchIdentifiersOptionsRequest;
  /**
   * Recovery Methods Options
   * @type {PatchRecoveryMethodsOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  recovery_methods?: PatchRecoveryMethodsOptionsRequest;
  /**
   * Consent Options
   * @type {PatchConsentOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  consent?: PatchConsentOptionsRequest;
  /**
   * Session Options
   * @type {PatchSessionOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  session?: PatchSessionOptionsRequest;
  /**
   * Logout Options
   * @type {PatchLogoutOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  logout?: PatchLogoutOptionsRequest;
  /**
   * Sign-up Options
   * @type {PatchSignUpOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  sign_up?: PatchSignUpOptionsRequest;
}
