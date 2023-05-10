import { ExternalAuthenticators } from './external-authenticators';

/**
 * The Patch SignIn Page Options Request class
 * @export
 * @interface PatchBrandingSignInPageOptionsRequest
 */
export interface PatchBrandingSignInPageOptionsRequest {
  /**
   * If enabled password will be prompted on the same screen as the username.
   * @type {boolean}
   * @memberof PatchBrandingSignInPageOptionsRequest
   */
  prompt_password_on_initial_screen?: boolean;
  /**
   * If enabled, External SigIn Methods are shown on top and the Primary SigIn method is shown on bottom.
   * @type {boolean}
   * @memberof PatchBrandingSignInPageOptionsRequest
   */
  external_sign_in_methods_first?: boolean;
  /**
   * Order of the External SigIn methods buttons
   * @type {ExternalAuthenticators[]}
   * @memberof PatchBrandingSignInPageOptionsRequest
   */
  external_sign_in_methods_order?: ExternalAuthenticators[];
}
