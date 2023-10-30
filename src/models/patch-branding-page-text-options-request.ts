/**
 * The Patch Branding Page Text Options Request class
 * @export
 * @interface PatchBrandingPageTextOptionsRequest
 */
export interface PatchBrandingPageTextOptionsRequest {
  /**
   * Specifies the font size (in Rem) of the regular text
   * @type {number}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  regular_font_size?: number;
  /**
   * Specifies the font weight of the regule text
   * @type {number}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  regular_font_weight?: number;
  /**
   * Specifies the font size (in Rem) of the small text
   * @type {number}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  small_font_size?: number;
  /**
   * Specifies the font size (in Rem) of the extra-small text
   * @type {number}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  extra_small_font_size?: number;
  /**
   * Specifies the color (in Hex) of the regular text
   * @type {string}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  text_color?: string;
  /**
   * Specifies the color (in Hex) of the error text
   * @type {string}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  error_color?: string;
  /**
   * Specifies the color (in Hex) of an error element when it is in the hover state
   * @type {string}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  error_hover_color?: string;
  /**
   * Specifies the alignment of the heading text relative to the card
   * @type {string}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  heading_alignment?: string;
  /**
   * Specifies the font size (in Rem) of the heading text
   * @type {number}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  heading_font_size?: number;
  /**
   * Specifies the font weight of the heading text
   * @type {number}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  heading_font_weight?: number;
  /**
   * Specifies the font size (in Rem) of the sub-heading text
   * @type {number}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  sub_heading_font_size?: number;
  /**
   * Specifies the font weight of the sub-heading text
   * @type {number}
   * @memberof PatchBrandingPageTextOptionsRequest
   */
  sub_heading_font_weight?: number;
}
