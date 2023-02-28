import { PatchAccountProtectionOptionsRequest } from './patch-account-protection-options-request';
import { PatchAuthenticationGeneralOptionsOptionsRequest } from './patch-authentication-general-options-options-request';
import { PatchAuthenticationMethodOptionsRequest } from './patch-authentication-method-options-request';
import { PatchExternalProviderOptionsRequest } from './patch-external-provider-options-request';
import { PatchLogoutOptionsRequest } from './patch-logout-options-request';
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
   * Authentication Method Options
   * @type {PatchAuthenticationMethodOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  authentication_methods?: PatchAuthenticationMethodOptionsRequest;
  /**
   * External Provider Options
   * @type {PatchExternalProviderOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  external_providers?: PatchExternalProviderOptionsRequest;
  /**
   * Authentication General Options
   * @type {PatchAuthenticationGeneralOptionsOptionsRequest}
   * @memberof PatchAuthenticationOptionsRequest
   */
  general?: PatchAuthenticationGeneralOptionsOptionsRequest;
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
