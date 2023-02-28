import { CommunicationEmailOptions } from './communication-email-options';
import { CommunicationSmsOptions } from './communication-sms-options';

/**
 * The Communication Options response class
 * @export
 * @interface CommunicationOptions
 */
export interface CommunicationOptions {
  /**
   * Email - Communication Options
   * @type {CommunicationEmailOptions}
   * @memberof CommunicationOptions
   */
  email: CommunicationEmailOptions;
  /**
   * Sms - Communication Options
   * @type {CommunicationSmsOptions}
   * @memberof CommunicationOptions
   */
  sms: CommunicationSmsOptions;
}
