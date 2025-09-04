import { BrandingPageButtonOptions } from './branding-page-button-options';
import { BrandingPageCheckboxOptions } from './branding-page-checkbox-options';
import { BrandingPageCodeOptions } from './branding-page-code-options';
import { BrandingPageInputOptions } from './branding-page-input-options';
import { BrandingPageLayoutOptions } from './branding-page-layout-options';
import { BrandingPageLinkOptions } from './branding-page-link-options';
import { BrandingPageLogoOptions } from './branding-page-logo-options';
import { BrandingPageProviderButtonOptions } from './branding-page-provider-button-options';
import { BrandingPageTextOptions } from './branding-page-text-options';

/**
 * The Branding Page Options response class
 * @export
 * @interface BrandingPageOptions
 */
export interface BrandingPageOptions {
  /**
   * Specifies whether or not the MonoCloud watermark will be shown on the login pages
   * @type {boolean}
   * @memberof BrandingPageOptions
   */
  show_watermark: boolean;
  /**
   * Page Branding Logo Options
   * @type {BrandingPageLogoOptions}
   * @memberof BrandingPageOptions
   */
  logo: BrandingPageLogoOptions;
  /**
   * Page Branding Layout Options
   * @type {BrandingPageLayoutOptions}
   * @memberof BrandingPageOptions
   */
  layout: BrandingPageLayoutOptions;
  /**
   * Page Branding Link Options
   * @type {BrandingPageLinkOptions}
   * @memberof BrandingPageOptions
   */
  link: BrandingPageLinkOptions;
  /**
   * Page Branding Link Options
   * @type {BrandingPageInputOptions}
   * @memberof BrandingPageOptions
   */
  input: BrandingPageInputOptions;
  /**
   * Page Branding Checkbox Options
   * @type {BrandingPageCheckboxOptions}
   * @memberof BrandingPageOptions
   */
  checkbox: BrandingPageCheckboxOptions;
  /**
   * Page Branding Button Options
   * @type {BrandingPageButtonOptions}
   * @memberof BrandingPageOptions
   */
  button: BrandingPageButtonOptions;
  /**
   * Page Branding Provider Button Options
   * @type {BrandingPageProviderButtonOptions}
   * @memberof BrandingPageOptions
   */
  provider_button: BrandingPageProviderButtonOptions;
  /**
   * Page Branding Code Options
   * @type {BrandingPageCodeOptions}
   * @memberof BrandingPageOptions
   */
  code: BrandingPageCodeOptions;
  /**
   * Page Branding Text Options
   * @type {BrandingPageTextOptions}
   * @memberof BrandingPageOptions
   */
  text: BrandingPageTextOptions;
}
