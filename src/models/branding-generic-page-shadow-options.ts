/**
 * The Branding Generic Page Shadow Options response class
 * @export
 * @interface BrandingGenericPageShadowOptions
 */
export interface BrandingGenericPageShadowOptions {
  /**
   * Specifies the horizontal offset of the shadow (in Pixels)
   * @type {number}
   * @memberof BrandingGenericPageShadowOptions
   */
  h_offset: number;
  /**
   * Specifies the vertical offset of the shadow (in Pixels)
   * @type {number}
   * @memberof BrandingGenericPageShadowOptions
   */
  v_offset: number;
  /**
   * Specifies the blur radius (in Pixels)
   * @type {number}
   * @memberof BrandingGenericPageShadowOptions
   */
  blur: number;
  /**
   * Specifies the spread radius (in Pixels)
   * @type {number}
   * @memberof BrandingGenericPageShadowOptions
   */
  spread: number;
  /**
   * Specifies the color of the shadow (in Hex)
   * @type {string}
   * @memberof BrandingGenericPageShadowOptions
   */
  color: string;
  /**
   * Specifies if the shadow is an inner shadow
   * @type {boolean}
   * @memberof BrandingGenericPageShadowOptions
   */
  inset: boolean;
}
