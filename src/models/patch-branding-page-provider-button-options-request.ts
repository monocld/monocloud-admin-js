/**
 * The Patch Branding Page Provider Button Options Request class
 * @export
 * @interface PatchBrandingPageProviderButtonOptionsRequest
 */
export interface PatchBrandingPageProviderButtonOptionsRequest {
  /**
   * Specifies the border radius (in Pixels) of the login provider buttons
   * @type {number}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  border_radius?: number;
  /**
   * Specifies the border color (in Hex) of the login provider buttons
   * @type {string}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  border_color?: string;
  /**
   * Specifies the border width (in Pixels) of the login provider buttons
   * @type {number}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  border_width?: number;
  /**
   * Specifies the box-shadow of the login provider buttons
   * @type {string}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  shadow?: string;
  /**
   * Specifies the background of the login provider buttons
   * @type {string}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  background?: string;
  /**
   * Specifies the color (in Hex) of the text contained in the login provider buttons
   * @type {string}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  text_color?: string;
  /**
   * Specifies the alignment of the text contained in the login provider buttons
   * @type {string}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  text_alignment?: string;
  /**
   * Specifies the border color (in Hex) of the login provider buttons when in the hover state
   * @type {string}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  hover_border_color?: string;
  /**
   * Specifies the border width (in Pixels) of the login provider buttons when in the hover state
   * @type {number}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  hover_border_width?: number;
  /**
   * Specifies the box-shadow of the login provider buttons when in the hover state
   * @type {string}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  hover_shadow?: string;
  /**
   * Specifies the background of the login provider buttons when in the hover state
   * @type {string}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  hover_background?: string;
  /**
   * Specifies the color (in Hex) of the text contained in the login provider buttons when in the hover state
   * @type {string}
   * @memberof PatchBrandingPageProviderButtonOptionsRequest
   */
  hover_text_color?: string;
}
