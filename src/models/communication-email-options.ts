import { CommunicationEmailSendGridOptions } from './communication-email-send-grid-options';
import { EmailProviders } from './email-providers';

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
   * Provider used to send Emails
   * @type {EmailProviders}
   * @memberof CommunicationEmailOptions
   */
  provider: EmailProviders;
  /**
   * Default email address from where the emails will be sent.
   * @type {string}
   * @memberof CommunicationEmailOptions
   */
  default_from_email: string;
}
