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
   * Specifies whether to use the default settings.
   * @type {boolean}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  use_default_settings?: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  client_id?: string | null;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  client_secret?: string | null;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  scopes?: string[] | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof PatchExternalProviderGoogleOptionsRequest
   */
  trust_email_verified_scope?: boolean;
}
