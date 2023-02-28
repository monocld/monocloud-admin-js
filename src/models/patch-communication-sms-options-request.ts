import { PatchCommunicationSmsTwilioOptionsRequest } from './patch-communication-sms-twilio-options-request';

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
   * Use the the internal keys to send Sms
   * @type {boolean}
   * @memberof PatchCommunicationSmsOptionsRequest
   */
  use_internal_keys?: boolean;
}
