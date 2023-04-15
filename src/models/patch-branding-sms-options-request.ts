import { PatchBrandingGenericCustomSmsOptionsRequest } from './patch-branding-generic-custom-sms-options-request';

/**
 * The Patch Branding Sms Options Request class
 * @export
 * @interface PatchBrandingSmsOptionsRequest
 */
export interface PatchBrandingSmsOptionsRequest {
  /**
   * SignIn Sms Code Branding Options
   * @type {PatchBrandingGenericCustomSmsOptionsRequest}
   * @memberof PatchBrandingSmsOptionsRequest
   */
  sign_in?: PatchBrandingGenericCustomSmsOptionsRequest;
  /**
   * Verification Sms Code Branding Options
   * @type {PatchBrandingGenericCustomSmsOptionsRequest}
   * @memberof PatchBrandingSmsOptionsRequest
   */
  verification?: PatchBrandingGenericCustomSmsOptionsRequest;
  /**
   * Password Reset Sms Code Branding Options
   * @type {PatchBrandingGenericCustomSmsOptionsRequest}
   * @memberof PatchBrandingSmsOptionsRequest
   */
  password_reset?: PatchBrandingGenericCustomSmsOptionsRequest;
}
