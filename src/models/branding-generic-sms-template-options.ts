/**
 * The Branding Generic Sms Template Options response class
 * @export
 * @interface BrandingGenericSmsTemplateOptions
 */
export interface BrandingGenericSmsTemplateOptions {
  /**
   * Specifies whether to use the custom template.
   * @type {boolean}
   * @memberof BrandingGenericSmsTemplateOptions
   */
  use_custom_template: boolean;
  /**
   * Custom LiquidJS template for the SMS
   * @type {string}
   * @memberof BrandingGenericSmsTemplateOptions
   */
  template?: string | null;
}
