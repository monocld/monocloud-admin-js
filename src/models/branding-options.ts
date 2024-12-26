import { BrandingEmailOptions } from './branding-email-options';
import { BrandingPageOptions } from './branding-page-options';
import { BrandingSmsOptions } from './branding-sms-options';

/**
 * The Branding Options response class
 * @export
 * @interface BrandingOptions
 */
export interface BrandingOptions {
  /**
   * Email Branding Options
   * @type {BrandingEmailOptions}
   * @memberof BrandingOptions
   */
  email: BrandingEmailOptions;
  /**
   * Sms Branding Options
   * @type {BrandingSmsOptions}
   * @memberof BrandingOptions
   */
  sms: BrandingSmsOptions;
  /**
   * Page Branding Options
   * @type {BrandingPageOptions}
   * @memberof BrandingOptions
   */
  page: BrandingPageOptions;
  /**
   * Specifies the creation time of the Branding Options (in Epoch).
   * @type {number}
   * @memberof BrandingOptions
   */
  creation_time: number;
  /**
   * Specifies the last update time of the Branding Options (in Epoch).
   * @type {number}
   * @memberof BrandingOptions
   */
  last_updated: number;
}
