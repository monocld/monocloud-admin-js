import { AccountProtectionOptions } from './account-protection-options';
import { AuthenticatorsOptions } from './authenticators-options';
import { ConsentOptions } from './consent-options';
import { IdentifiersOptions } from './identifiers-options';
import { LogoutOptions } from './logout-options';
import { RecoveryMethodsOptions } from './recovery-methods-options';
import { SessionOptions } from './session-options';
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
   * Authenticators Options
   * @type {AuthenticatorsOptions}
   * @memberof AuthenticationOptions
   */
  authenticators: AuthenticatorsOptions;
  /**
   * Identifiers Options
   * @type {IdentifiersOptions}
   * @memberof AuthenticationOptions
   */
  identifiers: IdentifiersOptions;
  /**
   * Recovery Methods Options
   * @type {RecoveryMethodsOptions}
   * @memberof AuthenticationOptions
   */
  recovery_methods: RecoveryMethodsOptions;
  /**
   * Consent Options
   * @type {ConsentOptions}
   * @memberof AuthenticationOptions
   */
  consent: ConsentOptions;
  /**
   * Session Options
   * @type {SessionOptions}
   * @memberof AuthenticationOptions
   */
  session: SessionOptions;
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
