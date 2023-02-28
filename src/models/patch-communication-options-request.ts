import { PatchCommunicationEmailOptionsRequest } from './patch-communication-email-options-request';
import { PatchCommunicationSmsOptionsRequest } from './patch-communication-sms-options-request';

/**
 * The Patch Communication Options Request class
 * @export
 * @interface PatchCommunicationOptionsRequest
 */
export interface PatchCommunicationOptionsRequest {
  /**
   * Email - Communication Options
   * @type {PatchCommunicationEmailOptionsRequest}
   * @memberof PatchCommunicationOptionsRequest
   */
  email?: PatchCommunicationEmailOptionsRequest;
  /**
   * Sms - Communication Options
   * @type {PatchCommunicationSmsOptionsRequest}
   * @memberof PatchCommunicationOptionsRequest
   */
  sms?: PatchCommunicationSmsOptionsRequest;
}
