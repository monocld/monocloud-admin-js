/**
 * The Patch Branding Page Link Options Request class
 * @export
 * @interface PatchBrandingPageLinkOptionsRequest
 */
export interface PatchBrandingPageLinkOptionsRequest {
  /**
   * Specifies the color (in Hex) of the link text
   * @type {string}
   * @memberof PatchBrandingPageLinkOptionsRequest
   */
  color?: string;
  /**
   * Specifies the text decoration to be applied on the link text
   * @type {string}
   * @memberof PatchBrandingPageLinkOptionsRequest
   */
  decoration?: string;
  /**
   * Specifies the color of the link text when it is in the hover state
   * @type {string}
   * @memberof PatchBrandingPageLinkOptionsRequest
   */
  hover_color?: string;
  /**
   * Specifies the text decoration to be applied on the link text when it is in the hover state
   * @type {string}
   * @memberof PatchBrandingPageLinkOptionsRequest
   */
  hover_decoration?: string;
}
