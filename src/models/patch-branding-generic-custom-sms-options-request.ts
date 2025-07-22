/**
 * The Patch Generic Branding Custom Sms Options Request class
 * @export
 * @interface PatchBrandingGenericCustomSmsOptionsRequest
 */
export interface PatchBrandingGenericCustomSmsOptionsRequest {
  /**
   * Specifies whether notifications should be send internally.
   * @type {boolean}
   * @memberof PatchBrandingGenericCustomSmsOptionsRequest
   */
  send_notifications?: boolean;
  /**
   * Custom LiquidJS template for the SMS
   * @type {string}
   * @memberof PatchBrandingGenericCustomSmsOptionsRequest
   */
  template?: string | null;
}
