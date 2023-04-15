import { BrandingGenericEmailTemplateOptions } from './branding-generic-email-template-options';

/**
 * The Branding Email Options response class
 * @export
 * @interface BrandingEmailOptions
 */
export interface BrandingEmailOptions {
  /**
   * Welcome Email Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  welcome: BrandingGenericEmailTemplateOptions;
  /**
   * User Blocked Email Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  user_blocked: BrandingGenericEmailTemplateOptions;
  /**
   * Sign In Email Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  sign_in: BrandingGenericEmailTemplateOptions;
  /**
   * Verification Email Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  verification: BrandingGenericEmailTemplateOptions;
  /**
   * Password Reset Email Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  password_reset: BrandingGenericEmailTemplateOptions;
  /**
   * Password Updated Email Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  password_updated: BrandingGenericEmailTemplateOptions;
}
