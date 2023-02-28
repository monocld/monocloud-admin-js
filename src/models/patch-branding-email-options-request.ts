import { PatchBrandingGenericCustomEmailOptionsRequest } from './patch-branding-generic-custom-email-options-request';

/**
 * The Patch Branding Email Options Request class
 * @export
 * @interface PatchBrandingEmailOptionsRequest
 */
export interface PatchBrandingEmailOptionsRequest {
  /**
   * Magic Link SignIn Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  magic_link_sign_in?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Email Code SignIn Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  email_code_sign_in?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Magic Link Verification Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  magic_link_verification?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Email Code Verification Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  email_code_verification?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Welcome Email Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  welcome?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * User Lockout Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  magic_link_user_unblock?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Magic Link Password Reset Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  magic_link_password_reset?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Email Code Password Reset Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  email_code_password_reset?: PatchBrandingGenericCustomEmailOptionsRequest;
  /**
   * Password Updated Branding Options
   * @type {PatchBrandingGenericCustomEmailOptionsRequest}
   * @memberof PatchBrandingEmailOptionsRequest
   */
  password_updated?: PatchBrandingGenericCustomEmailOptionsRequest;
}
