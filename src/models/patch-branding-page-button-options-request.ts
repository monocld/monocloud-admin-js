import { PatchBrandingGenericPageBackgroundOptionsRequest } from './patch-branding-generic-page-background-options-request';
import { PatchBrandingGenericPageShadowOptionsRequest } from './patch-branding-generic-page-shadow-options-request';

/**
 * The Patch Branding Page Button Options Request class
 * @export
 * @interface PatchBrandingPageButtonOptionsRequest
 */
export interface PatchBrandingPageButtonOptionsRequest {
  /**
   * Specifies the font size (in Rem) of the text contained in the button
   * @type {number}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  font_size?: number;
  /**
   * Specifies the vertical padding (in Pixels) of the button
   * @type {number}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  padding_y?: number;
  /**
   * Specifies the border radius (in Pixels) of the button
   * @type {number}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  border_radius?: number;
  /**
   * Specifies the border color (in Hex) of the button
   * @type {string}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  border_color?: string;
  /**
   * Specifies the border width (in Pixels) of the button
   * @type {number}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  border_width?: number;
  /**
   * Specifies the box-shadow of the button
   * @type {PatchBrandingGenericPageShadowOptionsRequest}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  shadow?: PatchBrandingGenericPageShadowOptionsRequest;
  /**
   * Specifies the background of the button
   * @type {PatchBrandingGenericPageBackgroundOptionsRequest}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  background?: PatchBrandingGenericPageBackgroundOptionsRequest;
  /**
   * Specifies the color (in Hex) of the text contained in the button
   * @type {string}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  text_color?: string;
  /**
   * Specifies the border color (in Hex) of the button when it is in the hover state
   * @type {string}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  hover_border_color?: string;
  /**
   * Specifies the border width (in Pixels) of the button when it is in the hover state
   * @type {number}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  hover_border_width?: number;
  /**
   * Specifies the box-shadow of the button when it is in the hover state
   * @type {PatchBrandingGenericPageShadowOptionsRequest}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  hover_shadow?: PatchBrandingGenericPageShadowOptionsRequest;
  /**
   * Specifies the background of the button when it is in the hover state
   * @type {PatchBrandingGenericPageBackgroundOptionsRequest}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  hover_background?: PatchBrandingGenericPageBackgroundOptionsRequest;
  /**
   * Specifies the color (in Hex) of the text contained in the button when it is in the hover state
   * @type {string}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  hover_text_color?: string;
  /**
   * Specifies the border color (in Hex) of the outline type button
   * @type {string}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  outline_border_color?: string;
  /**
   * Specifies border width (in Pixels) of the outline type button
   * @type {number}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  outline_border_width?: number;
  /**
   * Specifies the box-shadow of the outline type button
   * @type {PatchBrandingGenericPageShadowOptionsRequest}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  outline_shadow?: PatchBrandingGenericPageShadowOptionsRequest;
  /**
   * Specifies the color (in Hex) of the text contained in the outline type button
   * @type {string}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  outline_text_color?: string;
  /**
   * Specifies border color (in Hex) of the outline type button when it is in the hover state
   * @type {string}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  outline_hover_border_color?: string;
  /**
   * Specifies border width (in Pixels) of the outline type button when it is in the hover state
   * @type {number}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  outline_hover_border_width?: number;
  /**
   * Specifies the box-shadow of the outline type button when it is in the hover state
   * @type {PatchBrandingGenericPageShadowOptionsRequest}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  outline_hover_shadow?: PatchBrandingGenericPageShadowOptionsRequest;
  /**
   * Specifies the color (in Hex) of the text contained in the outline type button when it is in the hover state
   * @type {string}
   * @memberof PatchBrandingPageButtonOptionsRequest
   */
  outline_hover_text_color?: string;
}
