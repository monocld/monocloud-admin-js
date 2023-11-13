import { PatchBrandingGenericPageBackgroundOptionsRequest } from './patch-branding-generic-page-background-options-request';

/**
 * The Patch Branding Page Checkbox Options Request class
 * @export
 * @interface PatchBrandingPageCheckboxOptionsRequest
 */
export interface PatchBrandingPageCheckboxOptionsRequest {
  /**
   * Specifies the background of the checkbox
   * @type {PatchBrandingGenericPageBackgroundOptionsRequest}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  background?: PatchBrandingGenericPageBackgroundOptionsRequest;
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
   * Specifies the background of the checkbox when it is in the hover state
   * @type {PatchBrandingGenericPageBackgroundOptionsRequest}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  hover_background?: PatchBrandingGenericPageBackgroundOptionsRequest;
  /**
   * Specifies the border color (in Hex) of the checkbox when it is in the hover state
   * @type {string}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  hover_border_color?: string;
  /**
   * Specifies the border width (in Pixels) of the checkbox when it is in the hover state
   * @type {number}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  hover_border_width?: number;
  /**
   * Specifies the background of the checkbox when it is in the disabled state
   * @type {PatchBrandingGenericPageBackgroundOptionsRequest}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  disabled_background?: PatchBrandingGenericPageBackgroundOptionsRequest;
  /**
   * Specifies the background of the checkbox when it is in the checked state
   * @type {PatchBrandingGenericPageBackgroundOptionsRequest}
   * @memberof PatchBrandingPageCheckboxOptionsRequest
   */
  checked_background?: PatchBrandingGenericPageBackgroundOptionsRequest;
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
