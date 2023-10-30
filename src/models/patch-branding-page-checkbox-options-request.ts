/**
 * The Patch Branding Page Checkbox Options Request class
 * @export
 * @interface PatchBrandingPageCheckboxOptionsRequest
 */
export interface PatchBrandingPageCheckboxOptionsRequest {
  /**
   * Specifies the background of the checkbox
   * @type {string}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  background?: string;
  /**
   * Specifies the border radius (in pixels) of the checkbox
   * @type {number}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  border_radius?: number;
  /**
   * Specifies the border color (in Hex) of the checkbox
   * @type {string}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  border_color?: string;
  /**
   * Specifies the border width (in Pixels) of the checkbox
   * @type {number}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  border_width?: number;
  /**
   * Specifies the background of the checbox when it is in the hover state
   * @type {string}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  hover_background?: string;
  /**
   * Specifies the border color (in Hex) of the checkbox when it is in the focused state
   * @type {string}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  focus_border_color?: string;
  /**
   * Specifies the border width (in Pixels) of the checkbox when it is in the focused state
   * @type {number}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  focus_border_width?: number;
  /**
   * Specifies the background of the checkbox when it is in the disabled state
   * @type {string}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  disabled_background?: string;
  /**
   * Specifies the background of the checkbox when it is in the checked state
   * @type {string}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  checked_background?: string;
  /**
   * Specifies the border color (in Hex) of the checkbox when it is in the checked state
   * @type {string}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  checked_border_color?: string;
  /**
   * Specifies the color (in Hex) of the check-mark in the checkbox when it is in the checked state
   * @type {string}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  check_mark_color?: string;
}