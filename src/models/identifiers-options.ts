import { IdentifiersEmailOptions } from './identifiers-email-options';
import { IdentifiersPhoneOptions } from './identifiers-phone-options';
import { IdentifiersUsernameOptions } from './identifiers-username-options';

/**
 * The Identifiers Options response class
 * @export
 * @interface IdentifiersOptions
 */
export interface IdentifiersOptions {
  /**
   * Email Identifier Options
   * @type {IdentifiersEmailOptions}
   * @memberof IdentifiersOptions
   */
  email: IdentifiersEmailOptions;
  /**
   * Phone Identifier Options
   * @type {IdentifiersPhoneOptions}
   * @memberof IdentifiersOptions
   */
  phone: IdentifiersPhoneOptions;
  /**
   * Username Identifier Options
   * @type {IdentifiersUsernameOptions}
   * @memberof IdentifiersOptions
   */
  username: IdentifiersUsernameOptions;
}
