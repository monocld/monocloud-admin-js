/**
 * The Communicaiton Email SendGrid Options response class
 * @export
 * @interface CommunicationEmailSendGridOptions
 */
export interface CommunicationEmailSendGridOptions {
  /**
   * SendGrid Api Key
   * @type {string}
   * @memberof CommunicationEmailSendGridOptions
   */
  api_key: string;
  /**
   * From Email Address
   * @type {string}
   * @memberof CommunicationEmailSendGridOptions
   */
  from_email: string;
  /**
   * From Name
   * @type {string}
   * @memberof CommunicationEmailSendGridOptions
   */
  from_name?: string | null;
}
