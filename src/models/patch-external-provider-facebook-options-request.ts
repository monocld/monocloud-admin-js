/**
 * The Patch Facebook Provider Options Request class
 * @export
 * @interface PatchExternalProviderFacebookOptionsRequest
 */
export interface PatchExternalProviderFacebookOptionsRequest {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof PatchExternalProviderFacebookOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof PatchExternalProviderFacebookOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof PatchExternalProviderFacebookOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Specifies whether the tokens issued by the the provider be saved
   * @type {boolean}
   * @memberof PatchExternalProviderFacebookOptionsRequest
   */
  save_tokens?: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof PatchExternalProviderFacebookOptionsRequest
   */
  client_id?: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof PatchExternalProviderFacebookOptionsRequest
   */
  client_secret?: string;
  /**
   * List of provider scopes to be obtained
   * @type {Array<string>}
   * @memberof PatchExternalProviderFacebookOptionsRequest
   */
  scopes?: Array<string> | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof PatchExternalProviderFacebookOptionsRequest
   */
  trust_email_verified_scope?: boolean;
  /**
   * Required claims from facebook
   * @type {Array<string>}
   * @memberof PatchExternalProviderFacebookOptionsRequest
   */
  fields?: Array<string> | null;
}
