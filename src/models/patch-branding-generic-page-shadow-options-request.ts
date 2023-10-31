/**
 * The Patch Branding Generic Page Shadow Options Request class
 * @export
 * @interface PatchBrandingGenericPageShadowOptionsRequest
 */
export interface PatchBrandingGenericPageShadowOptionsRequest {
  /**
   * Specifies the horizontal offset of the shadow (in Pixels)
   * @type {number}
   * @memberof PatchBrandingGenericPageShadowOptionsRequest
   */
  h_offset?: number;
  /**
   * Specifies the vertical offset of the shadow (in Pixels)
   * @type {number}
   * @memberof PatchBrandingGenericPageShadowOptionsRequest
   */
  v_offset?: number;
  /**
   * Specifies the blur radius (in Pixels)
   * @type {number}
   * @memberof PatchBrandingGenericPageShadowOptionsRequest
   */
  blur?: number;
  /**
   * Specifies the spread radius (in Pixels)
   * @type {number}
   * @memberof PatchBrandingGenericPageShadowOptionsRequest
   */
  spread?: number;
  /**
   * Specifies the color of the shadow (in Hex)
   * @type {string}
   * @memberof PatchBrandingGenericPageShadowOptionsRequest
   */
  color?: string;
  /**
   * Specifies if the shadow is an inner shadow
   * @type {boolean}
   * @memberof PatchBrandingGenericPageShadowOptionsRequest
   */
  inset?: boolean;
}
