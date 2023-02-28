import { PatchBrandingGenericCustomSmsOptionsRequest } from './patch-branding-generic-custom-sms-options-request';

/**
 * The Patch Branding Sms Options Request class
 * @export
 * @interface PatchBrandingSmsOptionsRequest
 */
export interface PatchBrandingSmsOptionsRequest {
  /**
   * Sms Code SignIn Branding Options
   * @type {PatchBrandingGenericCustomSmsOptionsRequest}
   * @memberof PatchBrandingSmsOptionsRequest
   */
  sms_code_sign_in?: PatchBrandingGenericCustomSmsOptionsRequest;
  /**
   * Sms Code Verification Branding Options
   * @type {PatchBrandingGenericCustomSmsOptionsRequest}
   * @memberof PatchBrandingSmsOptionsRequest
   */
  sms_code_verification?: PatchBrandingGenericCustomSmsOptionsRequest;
  /**
   * Sms Code Password Reset Branding Options
   * @type {PatchBrandingGenericCustomSmsOptionsRequest}
   * @memberof PatchBrandingSmsOptionsRequest
   */
  sms_code_password_reset?: PatchBrandingGenericCustomSmsOptionsRequest;
}
