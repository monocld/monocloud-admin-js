/**
 * The Patch Apple Provider Options Request class
 * @export
 * @interface PatchExternalProviderAppleOptionsRequest
 */
export interface PatchExternalProviderAppleOptionsRequest {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof PatchExternalProviderAppleOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof PatchExternalProviderAppleOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof PatchExternalProviderAppleOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Specifies whether to use the default settings.
   * @type {boolean}
   * @memberof PatchExternalProviderAppleOptionsRequest
   */
  use_default_settings?: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof PatchExternalProviderAppleOptionsRequest
   */
  client_id?: string | null;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof PatchExternalProviderAppleOptionsRequest
   */
  client_secret?: string | null;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof PatchExternalProviderAppleOptionsRequest
   */
  scopes?: string[] | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof PatchExternalProviderAppleOptionsRequest
   */
  trust_email_verified_scope?: boolean;
  /**
   * Apple generated teamId
   * @type {string}
   * @memberof PatchExternalProviderAppleOptionsRequest
   */
  team_id?: string | null;
  /**
   * Apple generated keyId
   * @type {string}
   * @memberof PatchExternalProviderAppleOptionsRequest
   */
  key_id?: string | null;
}
