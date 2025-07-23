import { EmailProviders } from './email-providers';
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
   * Provider used to send Emails
   * @type {EmailProviders}
   * @memberof PatchCommunicationEmailOptionsRequest
   */
  provider?: EmailProviders;
}
