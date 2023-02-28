import { AccountProtectionOptions } from './account-protection-options';
import { AuthenticationGeneralOptions } from './authentication-general-options';
import { AuthenticationMethodOptions } from './authentication-method-options';
import { ExternalProviderOptions } from './external-provider-options';
import { LogoutOptions } from './logout-options';
import { SignUpOptions } from './sign-up-options';

/**
 * The Authentication Options response class
 * @export
 * @interface AuthenticationOptions
 */
export interface AuthenticationOptions {
  /**
   * Account Protection Options
   * @type {AccountProtectionOptions}
   * @memberof AuthenticationOptions
   */
  account_protection: AccountProtectionOptions;
  /**
   * Authentication Method Options
   * @type {AuthenticationMethodOptions}
   * @memberof AuthenticationOptions
   */
  authentication_methods: AuthenticationMethodOptions;
  /**
   * External Provider Options
   * @type {ExternalProviderOptions}
   * @memberof AuthenticationOptions
   */
  external_providers: ExternalProviderOptions;
  /**
   * Authentication General Options
   * @type {AuthenticationGeneralOptions}
   * @memberof AuthenticationOptions
   */
  general: AuthenticationGeneralOptions;
  /**
   * Logout Options
   * @type {LogoutOptions}
   * @memberof AuthenticationOptions
   */
  logout: LogoutOptions;
  /**
   * Sign-up Options
   * @type {SignUpOptions}
   * @memberof AuthenticationOptions
   */
  sign_up: SignUpOptions;
}
