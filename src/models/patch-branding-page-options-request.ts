/**
 * The Patch Branding Page Options Request class
 * @export
 * @interface PatchBrandingPageOptionsRequest
 */
export interface PatchBrandingPageOptionsRequest {
  /**
   * Specifies the background css string to be used for pages
   * @type {string}
   * @memberof PatchBrandingPageOptionsRequest
   */
  background?: string;
  /**
   * Specifies the error colour to be used for pages
   * @type {string}
   * @memberof PatchBrandingPageOptionsRequest
   */
  error_color?: string;
  /**
   * Specifies Uri used for the favicon
   * @type {string}
   * @memberof PatchBrandingPageOptionsRequest
   */
  favicon_uri?: string | null;
  /**
   * Specifies Uri used for the logo
   * @type {string}
   * @memberof PatchBrandingPageOptionsRequest
   */
  logo_uri?: string | null;
  /**
   * Specifies the primary colour to be used for pages
   * @type {string}
   * @memberof PatchBrandingPageOptionsRequest
   */
  primary_color?: string;
}
