import { PatchSignUpRestrictionsOptionsRequest } from './patch-sign-up-restrictions-options-request';

/**
 * The Patch SignUp Options Request class
 * @export
 * @interface PatchSignUpOptionsRequest
 */
export interface PatchSignUpOptionsRequest {
  /**
   * Shows T&C and/or Privacy Policy Agreement on the Sign Up screen.  Make sure to add T&C and/or Privacy Policy links in the Project Settings.  T&C and/or Privacy Policy Agreement is not shown when user is created through External Identity Providers
   * @type {boolean}
   * @memberof PatchSignUpOptionsRequest
   */
  show_terms_and_privacy_policy?: boolean;
  /**
   * Requires user interaction to agree with T&C and/or Privacy Policy
   * @type {boolean}
   * @memberof PatchSignUpOptionsRequest
   */
  require_explicit_user_agreement?: boolean;
  /**
   * Privacy Url
   * @type {string}
   * @memberof PatchSignUpOptionsRequest
   */
  privacy_url?: string | null;
  /**
   * Terms Url
   * @type {string}
   * @memberof PatchSignUpOptionsRequest
   */
  terms_url?: string | null;
  /**
   * The whitelist Restriction Options.
   * @type {PatchSignUpRestrictionsOptionsRequest}
   * @memberof PatchSignUpOptionsRequest
   */
  whitelist?: PatchSignUpRestrictionsOptionsRequest;
  /**
   * The blacklist Restriction Options.
   * @type {PatchSignUpRestrictionsOptionsRequest}
   * @memberof PatchSignUpOptionsRequest
   */
  blacklist?: PatchSignUpRestrictionsOptionsRequest;
}
