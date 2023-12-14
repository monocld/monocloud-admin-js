import { BrandingGenericPageBackgroundOptions } from './branding-generic-page-background-options';
import { BrandingGenericPageShadowOptions } from './branding-generic-page-shadow-options';

/**
 * The Branding Page Layout Options response class
 * @export
 * @interface BrandingPageLayoutOptions
 */
export interface BrandingPageLayoutOptions {
  /**
   * Specifies the background of the page
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageLayoutOptions
   */
  background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the size of the card (in Pixels)
   * @type {number}
   * @memberof BrandingPageLayoutOptions
   */
  card_width: number;
  /**
   * Specifies position of the card relative to the page
   * @type {string}
   * @memberof BrandingPageLayoutOptions
   */
  card_position: string;
  /**
   * Specifies the column in which the card will be positioned on the grid
   * @type {number}
   * @memberof BrandingPageLayoutOptions
   */
  card_grid_column: number;
  /**
   * Specifies how many columns the card will occupy on the grid
   * @type {number}
   * @memberof BrandingPageLayoutOptions
   */
  card_grid_span: number;
  /**
   * Specifies the offset (in Pixels) used to position the card horizontally on the page
   * @type {number}
   * @memberof BrandingPageLayoutOptions
   */
  card_x_offset: number;
  /**
   * Specifies the background of the card
   * @type {BrandingGenericPageBackgroundOptions}
   * @memberof BrandingPageLayoutOptions
   */
  card_background: BrandingGenericPageBackgroundOptions;
  /**
   * Specifies the padding (in Pixels) to be applied to the card
   * @type {number}
   * @memberof BrandingPageLayoutOptions
   */
  card_padding: number;
  /**
   * Specifies the border width (in Pixels) of the card
   * @type {number}
   * @memberof BrandingPageLayoutOptions
   */
  card_border_width: number;
  /**
   * Specifies the border radius (in Pixels) of the card
   * @type {number}
   * @memberof BrandingPageLayoutOptions
   */
  card_border_radius: number;
  /**
   * Specifies the border color (in Hex) of the card
   * @type {string}
   * @memberof BrandingPageLayoutOptions
   */
  card_border_color: string;
  /**
   * Specifies the box-shadow of the card
   * @type {BrandingGenericPageShadowOptions}
   * @memberof BrandingPageLayoutOptions
   */
  card_shadow: BrandingGenericPageShadowOptions;
}
