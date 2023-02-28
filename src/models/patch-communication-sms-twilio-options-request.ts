/**
 * The Patch Communication Sms Twilio Options Request class
 * @export
 * @interface PatchCommunicationSmsTwilioOptionsRequest
 */
export interface PatchCommunicationSmsTwilioOptionsRequest {
  /**
   * Twilio SID
   * @type {string}
   * @memberof PatchCommunicationSmsTwilioOptionsRequest
   */
  sid?: string;
  /**
   * Twilio Auth Token
   * @type {string}
   * @memberof PatchCommunicationSmsTwilioOptionsRequest
   */
  auth_token?: string;
  /**
   * Twilio Messaging SID
   * @type {string}
   * @memberof PatchCommunicationSmsTwilioOptionsRequest
   */
  messaging_sid?: string | null;
  /**
   * Twilio From
   * @type {string}
   * @memberof PatchCommunicationSmsTwilioOptionsRequest
   */
  from?: string | null;
}
