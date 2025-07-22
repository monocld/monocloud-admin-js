/**
 * The Branding Email Generic Template Options response class
 * @export
 * @interface BrandingGenericEmailTemplateOptions
 */
export interface BrandingGenericEmailTemplateOptions {
  /**
   * Specifies whether notifications should be send internally.
   * @type {boolean}
   * @memberof BrandingGenericEmailTemplateOptions
   */
  send_notifications: boolean;
  /**
   * Specifies the text to be used as the email subject
   * @type {string}
   * @memberof BrandingGenericEmailTemplateOptions
   */
  subject?: string | null;
  /**
   * Specifies the URI for the custom template to be used
   * @type {string}
   * @memberof BrandingGenericEmailTemplateOptions
   */
  template_uri?: string | null;
}
