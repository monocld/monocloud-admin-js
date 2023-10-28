/**
 * The Patch Branding Page Logo Options Request class
 * @export
 * @interface PatchBrandingPageLogoOptionsRequest
 */
export interface PatchBrandingPageLogoOptionsRequest {
  /**
   * Specifies Uri of the project logo
   * @type {string}
   * @memberof PatchBrandingPageLogoOptionsRequest
   */
  uri?: string | null;
  /**
   * Specifies the height (in Pixels) of the client / project logo
   * @type {number}
   * @memberof PatchBrandingPageLogoOptionsRequest
   */
  height?: number;
  /**
   * Specifies the horizontal position of the logo
   * @type {string}
   * @memberof PatchBrandingPageLogoOptionsRequest
   */
  position?: string;
}
