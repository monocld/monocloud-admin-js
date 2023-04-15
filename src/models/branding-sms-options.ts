import { BrandingGenericSmsTemplateOptions } from './branding-generic-sms-template-options';

/**
 * The Branding Sms Options response class
 * @export
 * @interface BrandingSmsOptions
 */
export interface BrandingSmsOptions {
  /**
   * SignIn Sms Code Branding Options
   * @type {BrandingGenericSmsTemplateOptions}
   * @memberof BrandingSmsOptions
   */
  sign_in: BrandingGenericSmsTemplateOptions;
  /**
   * Verification Sms Code Branding Options
   * @type {BrandingGenericSmsTemplateOptions}
   * @memberof BrandingSmsOptions
   */
  verification: BrandingGenericSmsTemplateOptions;
  /**
   * Password Reset Sms Code Branding Options
   * @type {BrandingGenericSmsTemplateOptions}
   * @memberof BrandingSmsOptions
   */
  password_reset: BrandingGenericSmsTemplateOptions;
}
