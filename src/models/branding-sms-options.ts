import { BrandingGenericSmsTemplateOptions } from './branding-generic-sms-template-options';

/**
 * The Branding Sms Options response class
 * @export
 * @interface BrandingSmsOptions
 */
export interface BrandingSmsOptions {
  /**
   * Sms Code SignIn Branding Options
   * @type {BrandingGenericSmsTemplateOptions}
   * @memberof BrandingSmsOptions
   */
  sms_code_sign_in: BrandingGenericSmsTemplateOptions;
  /**
   * Sms Code Verification Branding Options
   * @type {BrandingGenericSmsTemplateOptions}
   * @memberof BrandingSmsOptions
   */
  sms_code_verification: BrandingGenericSmsTemplateOptions;
  /**
   * Sms Code Password Reset Branding Options
   * @type {BrandingGenericSmsTemplateOptions}
   * @memberof BrandingSmsOptions
   */
  sms_code_password_reset: BrandingGenericSmsTemplateOptions;
}
