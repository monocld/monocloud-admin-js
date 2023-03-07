import { ExternalIDPs } from './external-idps';

/**
 * The Branding SignIn Page Options response class
 * @export
 * @interface BrandingSignInPageOptions
 */
export interface BrandingSignInPageOptions {
  /**
   * If enabled password will be prompted on the same screen as the username.
   * @type {boolean}
   * @memberof BrandingSignInPageOptions
   */
  prompt_password_on_initial_screen: boolean;
  /**
   * If enabled, External SigIn Methods are shown on top and the Primary SigIn method is shown on bottom.
   * @type {boolean}
   * @memberof BrandingSignInPageOptions
   */
  external_sign_in_methods_first: boolean;
  /**
   * Order of the External SigIn methods buttons
   * @type {ExternalIDPs[]}
   * @memberof BrandingSignInPageOptions
   */
  external_sign_in_methods_order: ExternalIDPs[];
}
