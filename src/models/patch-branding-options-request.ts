import { PatchBrandingAnalyticsOptionsRequest } from './patch-branding-analytics-options-request';
import { PatchBrandingEmailOptionsRequest } from './patch-branding-email-options-request';
import { PatchBrandingPageOptionsRequest } from './patch-branding-page-options-request';
import { PatchBrandingProjectOptionsRequest } from './patch-branding-project-options-request';
import { PatchBrandingSmsOptionsRequest } from './patch-branding-sms-options-request';

/**
 * The Patch Branding Options Request class
 * @export
 * @interface PatchBrandingOptionsRequest
 */
export interface PatchBrandingOptionsRequest {
  /**
   * Email Branding Options
   * @type {PatchBrandingEmailOptionsRequest}
   * @memberof PatchBrandingOptionsRequest
   */
  email?: PatchBrandingEmailOptionsRequest;
  /**
   * Sms Branding Options
   * @type {PatchBrandingSmsOptionsRequest}
   * @memberof PatchBrandingOptionsRequest
   */
  sms?: PatchBrandingSmsOptionsRequest;
  /**
   * Page Branding Options
   * @type {PatchBrandingPageOptionsRequest}
   * @memberof PatchBrandingOptionsRequest
   */
  page?: PatchBrandingPageOptionsRequest;
  /**
   * Project Branding Options
   * @type {PatchBrandingProjectOptionsRequest}
   * @memberof PatchBrandingOptionsRequest
   */
  project?: PatchBrandingProjectOptionsRequest;
  /**
   * Analytics Branding Options
   * @type {PatchBrandingAnalyticsOptionsRequest}
   * @memberof PatchBrandingOptionsRequest
   */
  analytics?: PatchBrandingAnalyticsOptionsRequest;
}
