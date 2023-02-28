/**
 * The Communication Sms Twilio Options response class
 * @export
 * @interface CommunicationSmsTwilioOptions
 */
export interface CommunicationSmsTwilioOptions {
  /**
   * Twilio SID
   * @type {string}
   * @memberof CommunicationSmsTwilioOptions
   */
  sid: string;
  /**
   * Twilio Auth Token
   * @type {string}
   * @memberof CommunicationSmsTwilioOptions
   */
  auth_token: string;
  /**
   * Twilio Messaging SID
   * @type {string}
   * @memberof CommunicationSmsTwilioOptions
   */
  messaging_sid?: string | null;
  /**
   * Twilio From
   * @type {string}
   * @memberof CommunicationSmsTwilioOptions
   */
  from?: string | null;
}
