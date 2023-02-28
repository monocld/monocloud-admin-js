import { PatchExternalProviderAppleOptionsRequest } from './patch-external-provider-apple-options-request';
import { PatchExternalProviderFacebookOptionsRequest } from './patch-external-provider-facebook-options-request';
import { PatchExternalProviderGoogleOptionsRequest } from './patch-external-provider-google-options-request';

/**
 * The Patch Provider Options Request class
 * @export
 * @interface PatchExternalProviderOptionsRequest
 */
export interface PatchExternalProviderOptionsRequest {
  /**
   * Google\'s ID Provider settings
   * @type {PatchExternalProviderGoogleOptionsRequest}
   * @memberof PatchExternalProviderOptionsRequest
   */
  google?: PatchExternalProviderGoogleOptionsRequest | null;
  /**
   * Apple\'s ID Provider Settings
   * @type {PatchExternalProviderAppleOptionsRequest}
   * @memberof PatchExternalProviderOptionsRequest
   */
  apple?: PatchExternalProviderAppleOptionsRequest | null;
  /**
   * Facebook\'s Provider Settings
   * @type {PatchExternalProviderFacebookOptionsRequest}
   * @memberof PatchExternalProviderOptionsRequest
   */
  facebook?: PatchExternalProviderFacebookOptionsRequest | null;
}
