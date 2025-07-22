import { PatchCommunicationSmsTwilioOptionsRequest } from './patch-communication-sms-twilio-options-request';
import { SmsProviders } from './sms-providers';

/**
 * The Patch Communication Sms Options Request class
 * @export
 * @interface PatchCommunicationSmsOptionsRequest
 */
export interface PatchCommunicationSmsOptionsRequest {
  /**
   * Twilio Options
   * @type {PatchCommunicationSmsTwilioOptionsRequest}
   * @memberof PatchCommunicationSmsOptionsRequest
   */
  twilio?: PatchCommunicationSmsTwilioOptionsRequest | null;
  /**
   * Provider used to send Sms
   * @type {SmsProviders}
   * @memberof PatchCommunicationSmsOptionsRequest
   */
  provider?: SmsProviders;
}
