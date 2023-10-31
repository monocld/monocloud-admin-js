import { BrandingGenericPageBackgroundOptions } from './branding-generic-page-background-options';

/**
 * The Branding Page Code Options response class
 * @export
 * @interface BrandingPageCodeOptions
 */
export interface BrandingPageCodeOptions {
  /**
   * Specifies the color (in Hex) of the text contained in the the code box
   * @type {string}
   * @memberof BrandingPageCodeOptions
   */
  text_color: string;
  /**
   * Specifies the font size (in Rem) of the text contained in the the code box
   * @type {number}
   * @memberof BrandingPageCodeOptions
   */
  font_size: number;
  /**
   * Specifies the font weight of the text contained in the the code box
   * @type {number}
   * @memberof BrandingPageCodeOptions
   */
  font_weight: number;
  /**
   * Specifies the space between the code characters (in em) in the code box
   * @type {number}
   * @memberof BrandingPageCodeOptions
   */
  letter_spacing: number;
  /**
   * Specifies the background of the code box
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageCodeOptions
   */
  background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the border width (in Pixels) of the code box
   * @type {number}
   * @memberof BrandingPageCodeOptions
   */
  border_width: number;
  /**
   * Specifies the border color (in Hex) of the code box
   * @type {string}
   * @memberof BrandingPageCodeOptions
   */
  border_color: string;
  /**
   * Specifies the border radius (in Pixels) of the code box
   * @type {number}
   * @memberof BrandingPageCodeOptions
   */
  border_radius: number;
}
