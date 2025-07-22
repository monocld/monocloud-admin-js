import { CommunicationSmsTwilioOptions } from './communication-sms-twilio-options';
import { SmsProviders } from './sms-providers';

/**
 * The Communication Sms Options response class
 * @export
 * @interface CommunicationSmsOptions
 */
export interface CommunicationSmsOptions {
  /**
   * Twilio Options
   * @type {CommunicationSmsTwilioOptions}
   * @memberof CommunicationSmsOptions
   */
  twilio?: CommunicationSmsTwilioOptions | null;
  /**
   * Provider used to send Sms
   * @type {SmsProviders}
   * @memberof CommunicationSmsOptions
   */
  provider: SmsProviders;
}
