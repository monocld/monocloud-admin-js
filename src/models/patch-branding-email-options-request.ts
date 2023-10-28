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
   * Sign In Email Code Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  sign_in_code?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Sign In Email Link Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  sign_in_link?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Sign In Email Code and Link Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  sign_in_code_and_link?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Verification Email Code Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  verification_code?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Verification Email Link Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  verification_link?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Verification Email Code and Link Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  verification_code_and_link?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Password Reset Email Code Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  password_reset_code?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Password Reset Email Link Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  password_reset_link?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Password Reset Email Code and Link Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  password_reset_code_and_link?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Password Updated Email Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  password_updated?: PatchBrandingGenericCustomEmailOptionsRequest;
}
