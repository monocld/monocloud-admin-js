import { CommunicationEmailSendGridOptions } from './communication-email-send-grid-options';

/**
 * The Communication Email Options response class
 * @export
 * @interface CommunicationEmailOptions
 */
export interface CommunicationEmailOptions {
  /**
   * SendGrid Email Options
   * @type {CommunicationEmailSendGridOptions}
   * @memberof CommunicationEmailOptions
   */
  send_grid?: CommunicationEmailSendGridOptions | null;
  /**
   * Use the the internal keys to send Emails
   * @type {boolean}
   * @memberof CommunicationEmailOptions
   */
  use_internal_keys: boolean;
}
