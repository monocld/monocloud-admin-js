import { BrandingGenericPageBackgroundOptions } from './branding-generic-page-background-options';
import { BrandingGenericPageShadowOptions } from './branding-generic-page-shadow-options';

/**
 * The Branding Page Button Options response class
 * @export
 * @interface BrandingPageButtonOptions
 */
export interface BrandingPageButtonOptions {
  /**
   * Specifies the font size (in Rem) of the text contained in the button
   * @type {number}
   * @memberof BrandingPageButtonOptions
   */
  font_size: number;
  /**
   * Specifies the vertical padding (in Pixels) of the button
   * @type {number}
   * @memberof BrandingPageButtonOptions
   */
  padding_y: number;
  /**
   * Specifies the border radius (in Pixels) of the button
   * @type {number}
   * @memberof BrandingPageButtonOptions
   */
  border_radius: number;
  /**
   * Specifies the border color (in Hex) of the button
   * @type {string}
   * @memberof BrandingPageButtonOptions
   */
  border_color: string;
  /**
   * Specifies the border width (in Pixels) of the button
   * @type {number}
   * @memberof BrandingPageButtonOptions
   */
  border_width: number;
  /**
   * Specifies the box-shadow of the button
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageButtonOptions
   */
  shadow: BrandingGenericPageShadowOptions;
  /**
   * Specifies the background of the button
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageButtonOptions
   */
  background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the color (in Hex) of the text contained in the button
   * @type {string}
   * @memberof BrandingPageButtonOptions
   */
  text_color: string;
  /**
   * Specifies the border color (in Hex) of the button when it is in the hover state
   * @type {string}
   * @memberof BrandingPageButtonOptions
   */
  hover_border_color: string;
  /**
   * Specifies the border width (in Pixels) of the button when it is in the hover state
   * @type {number}
   * @memberof BrandingPageButtonOptions
   */
  hover_border_width: number;
  /**
   * Specifies the box-shadow of the button when it is in the hover state
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageButtonOptions
   */
  hover_shadow: BrandingGenericPageShadowOptions;
  /**
   * Specifies the background of the button when it is in the hover state
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageButtonOptions
   */
  hover_background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the color (in Hex) of the text contained in the button when it is in the hover state
   * @type {string}
   * @memberof BrandingPageButtonOptions
   */
  hover_text_color: string;
  /**
   * Specifies the border color (in Hex) of the outline type button
   * @type {string}
   * @memberof BrandingPageButtonOptions
   */
  outline_border_color: string;
  /**
   * Specifies border width (in Pixels) of the outline type button
   * @type {number}
   * @memberof BrandingPageButtonOptions
   */
  outline_border_width: number;
  /**
   * Specifies the box-shadow of the outline type button
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageButtonOptions
   */
  outline_shadow: BrandingGenericPageShadowOptions;
  /**
   * Specifies the color (in Hex) of the text contained in the outline type button
   * @type {string}
   * @memberof BrandingPageButtonOptions
   */
  outline_text_color: string;
  /**
   * Specifies border color (in Hex) of the outline type button when it is in the hover state
   * @type {string}
   * @memberof BrandingPageButtonOptions
   */
  outline_hover_border_color: string;
  /**
   * Specifies border width (in Pixels) of the outline type button when it is in the hover state
   * @type {number}
   * @memberof BrandingPageButtonOptions
   */
  outline_hover_border_width: number;
  /**
   * Specifies the box-shadow of the outline type button when it is in the hover state
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageButtonOptions
   */
  outline_hover_shadow: BrandingGenericPageShadowOptions;
  /**
   * Specifies the color (in Hex) of the text contained in the outline type button when it is in the hover state
   * @type {string}
   * @memberof BrandingPageButtonOptions
   */
  outline_hover_text_color: string;
}
