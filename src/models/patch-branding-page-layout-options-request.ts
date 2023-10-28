/**
 * The Patch Branding Page Layout Options Request class
 * @export
 * @interface PatchBrandingPageLayoutOptionsRequest
 */
export interface PatchBrandingPageLayoutOptionsRequest {
  /**
   * Specifies the background of the page
   * @type {string}
   * @memberof PatchBrandingPageLayoutOptionsRequest
   */
  background?: string;
  /**
   * Specifies the size of the card (in Pixels)
   * @type {number}
   * @memberof PatchBrandingPageLayoutOptionsRequest
   */
  card_width?: number;
  /**
   * Specifies position of the card relative to the page
   * @type {string}
   * @memberof PatchBrandingPageLayoutOptionsRequest
   */
  card_position?: string;
  /**
   * Specifies the offset (in Pixels) used to position the card horizontally on the page
   * @type {number}
   * @memberof PatchBrandingPageLayoutOptionsRequest
   */
  card_x_offset?: number;
  /**
   * Specifies the background of the card
   * @type {string}
   * @memberof PatchBrandingPageLayoutOptionsRequest
   */
  card_background?: string;
  /**
   * Specifies the padding (in Pixels) to be applied to the card
   * @type {number}
   * @memberof PatchBrandingPageLayoutOptionsRequest
   */
  card_padding?: number;
  /**
   * Specifies the border width (in Pixels) of the card
   * @type {number}
   * @memberof PatchBrandingPageLayoutOptionsRequest
   */
  card_border_width?: number;
  /**
   * Specifies the border radius (in Pixels) of the card
   * @type {number}
   * @memberof PatchBrandingPageLayoutOptionsRequest
   */
  card_border_radius?: number;
  /**
   * Specifies the border color (in Hex) of the card
   * @type {string}
   * @memberof PatchBrandingPageLayoutOptionsRequest
   */
  card_border_color?: string;
  /**
   * Specifies the box-shadow of the card
   * @type {string}
   * @memberof PatchBrandingPageLayoutOptionsRequest
   */
  card_shadow?: string;
}
