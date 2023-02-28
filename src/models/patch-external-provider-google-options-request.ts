/**
 * The Patch Google Provider Options Request class
 * @export
 * @interface PatchExternalProviderGoogleOptionsRequest
 */
export interface PatchExternalProviderGoogleOptionsRequest {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Specifies whether the tokens issued by the the provider be saved
   * @type {boolean}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  save_tokens?: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  client_id?: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  client_secret?: string;
  /**
   * List of provider scopes to be obtained
   * @type {Array<string>}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  scopes?: Array<string> | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  trust_email_verified_scope?: boolean;
}
