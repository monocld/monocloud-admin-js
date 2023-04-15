import { PatchBrandingGenericCustomEmailOptionsRequest } from './patch-branding-generic-custom-email-options-request';

/**
 * The Patch Branding Email Options Request class
 * @export
 * @interface PatchBrandingEmailOptionsRequest
 */
export interface PatchBrandingEmailOptionsRequest {
  /**
   * Welcome Email Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  welcome?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * User Blocked Email Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  user_blocked?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Sign In Email Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  sign_in?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Verification Email Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  verification?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Password Reset Email Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  password_reset?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Password Updated Email Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  password_updated?: PatchBrandingGenericCustomEmailOptionsRequest;
}
