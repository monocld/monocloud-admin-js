import { PatchCommunicationEmailSendGridOptionsRequest } from './patch-communication-email-send-grid-options-request';

/**
 * The Patch Communication Email Options Request class
 * @export
 * @interface PatchCommunicationEmailOptionsRequest
 */
export interface PatchCommunicationEmailOptionsRequest {
  /**
   * SendGrid Email Options
   * @type {PatchCommunicationEmailSendGridOptionsRequest}
   * @memberof PatchCommunicationEmailOptionsRequest
   */
  send_grid?: PatchCommunicationEmailSendGridOptionsRequest | null;
  /**
   * Use the the internal keys to send Emails
   * @type {boolean}
   * @memberof PatchCommunicationEmailOptionsRequest
   */
  use_internal_keys?: boolean;
  /**
   * From Email Address
   * @type {string}
   * @memberof PatchCommunicationEmailOptionsRequest
   */
  from_email?: string | null;
  /**
   * From Name
   * @type {string}
   * @memberof PatchCommunicationEmailOptionsRequest
   */
  from_name?: string | null;
}
