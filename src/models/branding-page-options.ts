import { BrandingSignInPageOptions } from './branding-sign-in-page-options';

/**
 * The Branding Page Options response class
 * @export
 * @interface BrandingPageOptions
 */
export interface BrandingPageOptions {
  /**
   * Specifies the background css string to be used for pages
   * @type {string}
   * @memberof BrandingPageOptions
   */
  background: string;
  /**
   * Specifies the error colour to be used for pages
   * @type {string}
   * @memberof BrandingPageOptions
   */
  error_color: string;
  /**
   * Specifies Uri used for the favicon
   * @type {string}
   * @memberof BrandingPageOptions
   */
  favicon_uri?: string | null;
  /**
   * Specifies Uri used for the logo
   * @type {string}
   * @memberof BrandingPageOptions
   */
  logo_uri?: string | null;
  /**
   * Specifies the primary colour to be used for pages
   * @type {string}
   * @memberof BrandingPageOptions
   */
  primary_color: string;
  /**
   * Sign In Page Branding Options
   * @type {BrandingSignInPageOptions}
   * @memberof BrandingPageOptions
   */
  sign_in: BrandingSignInPageOptions;
}
