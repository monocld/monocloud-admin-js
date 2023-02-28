/**
 * The Patch Generic Branding Custom Sms Options Request class
 * @export
 * @interface PatchBrandingGenericCustomSmsOptionsRequest
 */
export interface PatchBrandingGenericCustomSmsOptionsRequest {
  /**
   * Specifies whether to use the custom template.
   * @type {boolean}
   * @memberof PatchBrandingGenericCustomSmsOptionsRequest
   */
  use_custom_template?: boolean;
  /**
   * Custom LiquidJS template for the SMS
   * @type {string}
   * @memberof PatchBrandingGenericCustomSmsOptionsRequest
   */
  template?: string | null;
}
