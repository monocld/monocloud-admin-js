import { BrandingGenericEmailTemplateOptions } from './branding-generic-email-template-options';

/**
 * The Branding Email Options response class
 * @export
 * @interface BrandingEmailOptions
 */
export interface BrandingEmailOptions {
  /**
   * Magic Link SignIn Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  magic_link_sign_in: BrandingGenericEmailTemplateOptions;
  /**
   * Email Code SignIn Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  email_code_sign_in: BrandingGenericEmailTemplateOptions;
  /**
   * Magic Link Verification Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  magic_link_verification: BrandingGenericEmailTemplateOptions;
  /**
   * Email Code Verification Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  email_code_verification: BrandingGenericEmailTemplateOptions;
  /**
   * Welcome Email Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  welcome: BrandingGenericEmailTemplateOptions;
  /**
   * User Lockout Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  magic_link_user_unblock: BrandingGenericEmailTemplateOptions;
  /**
   * Magic Link Password Reset Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  magic_link_password_reset: BrandingGenericEmailTemplateOptions;
  /**
   * Email Code Password Reset Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  email_code_password_reset: BrandingGenericEmailTemplateOptions;
  /**
   * Password Updated Branding Options
   * @type {BrandingGenericEmailTemplateOptions}
   * @memberof BrandingEmailOptions
   */
  password_updated: BrandingGenericEmailTemplateOptions;
}
