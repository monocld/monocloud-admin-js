import { ExternalProviderAppleOptions } from './external-provider-apple-options';
import { ExternalProviderFacebookOptions } from './external-provider-facebook-options';
import { ExternalProviderGoogleOptions } from './external-provider-google-options';

/**
 * The External Provider Options response class
 * @export
 * @interface ExternalProviderOptions
 */
export interface ExternalProviderOptions {
  /**
   * Google\'s ID Provider settings
   * @type {ExternalProviderGoogleOptions}
   * @memberof ExternalProviderOptions
   */
  google?: ExternalProviderGoogleOptions | null;
  /**
   * Apple\'s ID Provider Settings
   * @type {ExternalProviderAppleOptions}
   * @memberof ExternalProviderOptions
   */
  apple?: ExternalProviderAppleOptions | null;
  /**
   * Facebook\'s Provider Settings
   * @type {ExternalProviderFacebookOptions}
   * @memberof ExternalProviderOptions
   */
  facebook?: ExternalProviderFacebookOptions | null;
}
