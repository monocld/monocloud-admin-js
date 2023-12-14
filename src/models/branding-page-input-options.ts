import { BrandingGenericPageBackgroundOptions } from './branding-generic-page-background-options';
import { BrandingGenericPageShadowOptions } from './branding-generic-page-shadow-options';

/**
 * The Branding Page Input Options response class
 * @export
 * @interface BrandingPageInputOptions
 */
export interface BrandingPageInputOptions {
  /**
   * Specifies the text font size (in Rem) of the input box
   * @type {number}
   * @memberof BrandingPageInputOptions
   */
  font_size: number;
  /**
   * Specifies the text color (in Hex) of the input box
   * @type {string}
   * @memberof BrandingPageInputOptions
   */
  text_color: string;
  /**
   * Specifies the background of the input box
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageInputOptions
   */
  background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the border radius (in Pixels) of the input box
   * @type {number}
   * @memberof BrandingPageInputOptions
   */
  border_radius: number;
  /**
   * Specifies the border color (in Hex) of the input box
   * @type {string}
   * @memberof BrandingPageInputOptions
   */
  border_color: string;
  /**
   * Specifies the border width (in Pixels) of the input box
   * @type {number}
   * @memberof BrandingPageInputOptions
   */
  border_width: number;
  /**
   * Specifies the box-shadow of the input box
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageInputOptions
   */
  shadow: BrandingGenericPageShadowOptions;
  /**
   * Specifies the border color (in Hex) of the input box
   * @type {string}
   * @memberof BrandingPageInputOptions
   */
  focus_border_color: string;
  /**
   * Specifies the border width (in Pixels) of the input box when it is in the focused state
   * @type {number}
   * @memberof BrandingPageInputOptions
   */
  focus_border_width: number;
  /**
   * Specifies the box-shadow of the input box when it is in the focused state
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageInputOptions
   */
  focus_shadow: BrandingGenericPageShadowOptions;
  /**
   * Specifies the text color (in Hex) of the input box when it is in the focused state
   * @type {string}
   * @memberof BrandingPageInputOptions
   */
  focus_text_color: string;
  /**
   * Specifies the label color (in Hex) of the input box
   * @type {string}
   * @memberof BrandingPageInputOptions
   */
  label_color: string;
  /**
   * Specifies the label color (in Hex) of the input box when it is in the focused state
   * @type {string}
   * @memberof BrandingPageInputOptions
   */
  focus_label_color: string;
  /**
   * Specifies the box-shadow of the input box when it is in the error state
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageInputOptions
   */
  error_shadow: BrandingGenericPageShadowOptions;
  /**
   * Specifies the box-shadow of the input when it is in the error and focused state
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageInputOptions
   */
  error_focus_shadow: BrandingGenericPageShadowOptions;
}
