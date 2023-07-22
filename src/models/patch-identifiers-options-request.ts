import { PatchIdentifiersEmailOptionsRequest } from './patch-identifiers-email-options-request';
import { PatchIdentifiersPhoneOptionsRequest } from './patch-identifiers-phone-options-request';
import { PatchIdentifiersUsernameOptionsRequest } from './patch-identifiers-username-options-request';

/**
 * The Patch Identifiers Options Request class
 * @export
 * @interface PatchIdentifiersOptionsRequest
 */
export interface PatchIdentifiersOptionsRequest {
  /**
   * Email Identifier Options
   * @type {PatchIdentifiersEmailOptionsRequest}
   * @memberof PatchIdentifiersOptionsRequest
   */
  email?: PatchIdentifiersEmailOptionsRequest;
  /**
   * Phone Identifier Options
   * @type {PatchIdentifiersPhoneOptionsRequest}
   * @memberof PatchIdentifiersOptionsRequest
   */
  phone?: PatchIdentifiersPhoneOptionsRequest;
  /**
   * Username Identifier Options
   * @type {PatchIdentifiersUsernameOptionsRequest}
   * @memberof PatchIdentifiersOptionsRequest
   */
  username?: PatchIdentifiersUsernameOptionsRequest;
}
