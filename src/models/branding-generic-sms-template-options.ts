/**
 * The Branding Generic Sms Template Options response class
 * @export
 * @interface BrandingGenericSmsTemplateOptions
 */
export interface BrandingGenericSmsTemplateOptions {
  /**
   * Specifies whether notifications should be send internally.
   * @type {boolean}
   * @memberof BrandingGenericSmsTemplateOptions
   */
  send_notifications: boolean;
  /**
   * Custom LiquidJS template for the SMS
   * @type {string}
   * @memberof BrandingGenericSmsTemplateOptions
   */
  template?: string | null;
}
