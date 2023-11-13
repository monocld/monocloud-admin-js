import { BrandingGenericPageBackgroundOptions } from './branding-generic-page-background-options';

/**
 * The Branding Page Checkbox Options response class
 * @export
 * @interface BrandingPageCheckboxOptions
 */
export interface BrandingPageCheckboxOptions {
  /**
   * Specifies the background of the checkbox
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageCheckboxOptions
   */
  background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the border radius (in pixels) of the checkbox
   * @type {number}
   * @memberof BrandingPageCheckboxOptions
   */
  border_radius: number;
  /**
   * Specifies the border color (in Hex) of the checkbox
   * @type {string}
   * @memberof BrandingPageCheckboxOptions
   */
  border_color: string;
  /**
   * Specifies the border width (in Pixels) of the checkbox
   * @type {number}
   * @memberof BrandingPageCheckboxOptions
   */
  border_width: number;
  /**
   * Specifies the background of the checkbox when it is in the hover state
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageCheckboxOptions
   */
  hover_background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the border color (in Hex) of the checkbox when it is in the hover state
   * @type {string}
   * @memberof BrandingPageCheckboxOptions
   */
  hover_border_color: string;
  /**
   * Specifies the border width (in Pixels) of the checkbox when it is in the hover state
   * @type {number}
   * @memberof BrandingPageCheckboxOptions
   */
  hover_border_width: number;
  /**
   * Specifies the background of the checkbox when it is in the disabled state
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageCheckboxOptions
   */
  disabled_background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the background of the checkbox when it is in the checked state
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageCheckboxOptions
   */
  checked_background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the border color (in Hex) of the checkbox when it is in the checked state
   * @type {string}
   * @memberof BrandingPageCheckboxOptions
   */
  checked_border_color: string;
  /**
   * Specifies the color (in Hex) of the check-mark in the checkbox when it is in the checked state
   * @type {string}
   * @memberof BrandingPageCheckboxOptions
   */
  check_mark_color: string;
}
