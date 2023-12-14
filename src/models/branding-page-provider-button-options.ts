import { BrandingGenericPageBackgroundOptions } from './branding-generic-page-background-options';
import { BrandingGenericPageShadowOptions } from './branding-generic-page-shadow-options';

/**
 * The Branding Page Provider Button Options response class
 * @export
 * @interface BrandingPageProviderButtonOptions
 */
export interface BrandingPageProviderButtonOptions {
  /**
   * Specifies the border radius (in Pixels) of the login provider buttons
   * @type {number}
   * @memberof BrandingPageProviderButtonOptions
   */
  border_radius: number;
  /**
   * Specifies the border color (in Hex) of the login provider buttons
   * @type {string}
   * @memberof BrandingPageProviderButtonOptions
   */
  border_color: string;
  /**
   * Specifies the border width (in Pixels) of the login provider buttons
   * @type {number}
   * @memberof BrandingPageProviderButtonOptions
   */
  border_width: number;
  /**
   * Specifies the box-shadow of the login provider buttons
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageProviderButtonOptions
   */
  shadow: BrandingGenericPageShadowOptions;
  /**
   * Specifies the background of the login provider buttons
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageProviderButtonOptions
   */
  background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the color (in Hex) of the text contained in the login provider buttons
   * @type {string}
   * @memberof BrandingPageProviderButtonOptions
   */
  text_color: string;
  /**
   * Specifies the alignment of the text contained in the login provider buttons
   * @type {string}
   * @memberof BrandingPageProviderButtonOptions
   */
  text_alignment: string;
  /**
   * Specifies the border color (in Hex) of the login provider buttons when in the hover state
   * @type {string}
   * @memberof BrandingPageProviderButtonOptions
   */
  hover_border_color: string;
  /**
   * Specifies the border width (in Pixels) of the login provider buttons when in the hover state
   * @type {number}
   * @memberof BrandingPageProviderButtonOptions
   */
  hover_border_width: number;
  /**
   * Specifies the box-shadow of the login provider buttons when in the hover state
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageProviderButtonOptions
   */
  hover_shadow: BrandingGenericPageShadowOptions;
  /**
   * Specifies the background of the login provider buttons when in the hover state
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageProviderButtonOptions
   */
  hover_background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the color (in Hex) of the text contained in the login provider buttons when in the hover state
   * @type {string}
   * @memberof BrandingPageProviderButtonOptions
   */
  hover_text_color: string;
}
