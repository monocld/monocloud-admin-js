/**
 * The Patch Generic Branding Custom Email Options Request class
 * @export
 * @interface PatchBrandingGenericCustomEmailOptionsRequest
 */
export interface PatchBrandingGenericCustomEmailOptionsRequest {
  /**
   * Specifies whether to use the custom template.
   * @type {boolean}
   * @memberof PatchBrandingGenericCustomEmailOptionsRequest
   */
  use_custom_template?: boolean;
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
