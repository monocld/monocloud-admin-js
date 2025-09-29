import { PatchBrandingPageButtonOptionsRequest } from './patch-branding-page-button-options-request';
import { PatchBrandingPageCheckboxOptionsRequest } from './patch-branding-page-checkbox-options-request';
import { PatchBrandingPageCodeOptionsRequest } from './patch-branding-page-code-options-request';
import { PatchBrandingPageInputOptionsRequest } from './patch-branding-page-input-options-request';
import { PatchBrandingPageLayoutOptionsRequest } from './patch-branding-page-layout-options-request';
import { PatchBrandingPageLinkOptionsRequest } from './patch-branding-page-link-options-request';
import { PatchBrandingPageLogoOptionsRequest } from './patch-branding-page-logo-options-request';
import { PatchBrandingPageProviderButtonOptionsRequest } from './patch-branding-page-provider-button-options-request';
import { PatchBrandingPageTextOptionsRequest } from './patch-branding-page-text-options-request';

/**
 * The Patch Branding Page Options Request class
 * @export
 * @interface PatchBrandingPageOptionsRequest
 */
export interface PatchBrandingPageOptionsRequest {
  /**
   * Specifies whether or not the MonoCloud watermark will be shown on the login pages
   * @type {boolean}
   * @memberof PatchBrandingPageOptionsRequest
   */
  show_watermark?: boolean;
  /**
   * Page Branding Logo Options
   * @type {PatchBrandingPageLogoOptionsRequest}
   * @memberof PatchBrandingPageOptionsRequest
   */
  logo?: PatchBrandingPageLogoOptionsRequest;
  /**
   * Page Branding Layout Options
   * @type {PatchBrandingPageLayoutOptionsRequest}
   * @memberof PatchBrandingPageOptionsRequest
   */
  layout?: PatchBrandingPageLayoutOptionsRequest;
  /**
   * Page Branding Link Options
   * @type {PatchBrandingPageLinkOptionsRequest}
   * @memberof PatchBrandingPageOptionsRequest
   */
  link?: PatchBrandingPageLinkOptionsRequest;
  /**
   * Page Branding Link Options
   * @type {PatchBrandingPageInputOptionsRequest}
   * @memberof PatchBrandingPageOptionsRequest
   */
  input?: PatchBrandingPageInputOptionsRequest;
  /**
   * Page Branding Checkbox Options
   * @type {PatchBrandingPageCheckboxOptionsRequest}
   * @memberof PatchBrandingPageOptionsRequest
   */
  checkbox?: PatchBrandingPageCheckboxOptionsRequest;
  /**
   * Page Branding Button Options
   * @type {PatchBrandingPageButtonOptionsRequest}
   * @memberof PatchBrandingPageOptionsRequest
   */
  button?: PatchBrandingPageButtonOptionsRequest;
  /**
   * Page Branding Provider Button Options
   * @type {PatchBrandingPageProviderButtonOptionsRequest}
   * @memberof PatchBrandingPageOptionsRequest
   */
  provider_button?: PatchBrandingPageProviderButtonOptionsRequest;
  /**
   * Page Branding Code Options
   * @type {PatchBrandingPageCodeOptionsRequest}
   * @memberof PatchBrandingPageOptionsRequest
   */
  code?: PatchBrandingPageCodeOptionsRequest;
  /**
   * Page Branding Text Options
   * @type {PatchBrandingPageTextOptionsRequest}
   * @memberof PatchBrandingPageOptionsRequest
   */
  text?: PatchBrandingPageTextOptionsRequest;
}
