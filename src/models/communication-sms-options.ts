import { CommunicationSmsTwilioOptions } from './communication-sms-twilio-options';

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
   * Use the the internal keys to send Sms
   * @type {boolean}
   * @memberof CommunicationSmsOptions
   */
  use_internal_keys: boolean;
}
