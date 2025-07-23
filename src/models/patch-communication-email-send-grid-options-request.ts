/**
 * The Patch Communication Email SendGrid Options Request class
 * @export
 * @interface PatchCommunicationEmailSendGridOptionsRequest
 */
export interface PatchCommunicationEmailSendGridOptionsRequest {
  /**
   * SendGrid Api Key
   * @type {string}
   * @memberof PatchCommunicationEmailSendGridOptionsRequest
   */
  api_key?: string;
  /**
   * From Email Address
   * @type {string}
   * @memberof PatchCommunicationEmailSendGridOptionsRequest
   */
  from_email?: string;
  /**
   * From Name
   * @type {string}
   * @memberof PatchCommunicationEmailSendGridOptionsRequest
   */
  from_name?: string | null;
}
