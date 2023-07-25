import { RecoveryMethodsEmailOptions } from './recovery-methods-email-options';
import { RecoveryMethodsPhoneOptions } from './recovery-methods-phone-options';

/**
 * The Recovery Methods Options response class
 * @export
 * @interface RecoveryMethodsOptions
 */
export interface RecoveryMethodsOptions {
  /**
   * Recovery Methods Email Options
   * @type {RecoveryMethodsEmailOptions}
   * @memberof RecoveryMethodsOptions
   */
  email: RecoveryMethodsEmailOptions;
  /**
   * Recovery Methods Phone Options
   * @type {RecoveryMethodsPhoneOptions}
   * @memberof RecoveryMethodsOptions
   */
  phone: RecoveryMethodsPhoneOptions;
}
