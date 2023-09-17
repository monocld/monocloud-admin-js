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
  /**
   * Default email address from where the emails will be sent.
   * @type {string}
   * @memberof CommunicationEmailOptions
   */
  default_from_email: string;
  /**
   * From Email Address
   * @type {string}
   * @memberof CommunicationEmailOptions
   */
  from_email?: string | null;
  /**
   * From Name
   * @type {string}
   * @memberof CommunicationEmailOptions
   */
  from_name?: string | null;
}
