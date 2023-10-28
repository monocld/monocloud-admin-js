/**
 * The Patch Branding Page Input Options Request class
 * @export
 * @interface PatchBrandingPageInputOptionsRequest
 */
export interface PatchBrandingPageInputOptionsRequest {
  /**
   * Specifies the text font size (in Rem) of the input box
   * @type {number}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  font_size?: number;
  /**
   * Specifies the text color (in Hex) of the input box
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  text_color?: string;
  /**
   * Specifies the background of the input box
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  background?: string;
  /**
   * Specifies the border radius (in Pixels) of the input box
   * @type {number}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  border_radius?: number;
  /**
   * Specifies the border color (in Hex) of the input box
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  border_color?: string;
  /**
   * Specifies the border width (in Pixels) of the input box
   * @type {number}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  border_width?: number;
  /**
   * Specifies the box-shadow of the input box
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  shadow?: string;
  /**
   * Specifies the border color (in Hex) of the input box
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  focus_border_color?: string;
  /**
   * Specifies the border width (in Pixels) of the input box when it is in the focused state
   * @type {number}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  focus_border_width?: number;
  /**
   * Specifies the box-shadow of the input box when it is in the focused state
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  focus_shadow?: string;
  /**
   * Specifies the text color (in Hex) of the input box when it is in the focused state
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  focus_text_color?: string;
  /**
   * Specifies the label color (in Hex) of the input box
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  label_color?: string;
  /**
   * Specifies the label color (in Hex) of the input box when it is in the focused state
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  focus_label_color?: string;
  /**
   * Specifies the box-shadow of the input box when it is in the error state
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  error_shadow?: string;
  /**
   * Specifies the box-shadow of the input when it is in the error and focused state
   * @type {string}
   * @memberof PatchBrandingPageInputOptionsRequest
   */
  error_focus_shadow?: string;
}
