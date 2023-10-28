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
   * Sign In Email Code Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  sign_in_code: BrandingGenericEmailTemplateOptions;
  /**
   * Sign In Email Link Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  sign_in_link: BrandingGenericEmailTemplateOptions;
  /**
   * Sign In Email Code and Link Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  sign_in_code_and_link: BrandingGenericEmailTemplateOptions;
  /**
   * Verification Email Code Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  verification_code: BrandingGenericEmailTemplateOptions;
  /**
   * Verification Email Link Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  verification_link: BrandingGenericEmailTemplateOptions;
  /**
   * Verification Email Code and Link Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  verification_code_and_link: BrandingGenericEmailTemplateOptions;
  /**
   * Password Reset Email Code Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  password_reset_code: BrandingGenericEmailTemplateOptions;
  /**
   * Password Reset Email Link Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  password_reset_link: BrandingGenericEmailTemplateOptions;
  /**
   * Password Reset Email Code and Link Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  password_reset_code_and_link: BrandingGenericEmailTemplateOptions;
  /**
   * Password Updated Email Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  password_updated: BrandingGenericEmailTemplateOptions;
}
