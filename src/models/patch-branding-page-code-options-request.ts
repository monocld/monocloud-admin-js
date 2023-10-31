import { PatchBrandingGenericPageBackgroundOptionsRequest } from './patch-branding-generic-page-background-options-request';

/**
 * The Patch Branding Page Code Options Request class
 * @export
 * @interface PatchBrandingPageCodeOptionsRequest
 */
export interface PatchBrandingPageCodeOptionsRequest {
  /**
   * Specifies the color (in Hex) of the text contained in the the code box
   * @type {string}
   * @memberof PatchBrandingPageCodeOptionsRequest
   */
  text_color?: string;
  /**
   * Specifies the font size (in Rem) of the text contained in the the code box
   * @type {number}
   * @memberof PatchBrandingPageCodeOptionsRequest
   */
  font_size?: number;
  /**
   * Specifies the font weight of the text contained in the the code box
   * @type {number}
   * @memberof PatchBrandingPageCodeOptionsRequest
   */
  font_weight?: number;
  /**
   * Specifies the space between the code characters (in em) in the code box
   * @type {number}
   * @memberof PatchBrandingPageCodeOptionsRequest
   */
  letter_spacing?: number;
  /**
   * Specifies the background of the code box
   * @type {PatchBrandingGenericPageBackgroundOptionsRequest}
   * @memberof PatchBrandingPageCodeOptionsRequest
   */
  background?: PatchBrandingGenericPageBackgroundOptionsRequest;
  /**
   * Specifies the border width (in Pixels) of the code box
   * @type {number}
   * @memberof PatchBrandingPageCodeOptionsRequest
   */
  border_width?: number;
  /**
   * Specifies the border color (in Hex) of the code box
   * @type {string}
   * @memberof PatchBrandingPageCodeOptionsRequest
   */
  border_color?: string;
  /**
   * Specifies the border radius (in Pixels) of the code box
   * @type {number}
   * @memberof PatchBrandingPageCodeOptionsRequest
   */
  border_radius?: number;
}
