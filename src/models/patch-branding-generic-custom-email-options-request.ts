/**
 * The Patch Generic Branding Custom Email Options Request class
 * @export
 * @interface PatchBrandingGenericCustomEmailOptionsRequest
 */
export interface PatchBrandingGenericCustomEmailOptionsRequest {
  /**
   * Specifies whether notifications should be send internally.
   * @type {boolean}
   * @memberof PatchBrandingGenericCustomEmailOptionsRequest
   */
  send_notifications?: boolean;
  /**
   * Specifies the text to be used as the email subject
   * @type {string}
   * @memberof PatchBrandingGenericCustomEmailOptionsRequest
   */
  subject?: string | null;
  /**
   * Specifies the URI for the custom template to be used
   * @type {string}
   * @memberof PatchBrandingGenericCustomEmailOptionsRequest
   */
  template_uri?: string | null;
}
