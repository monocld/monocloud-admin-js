/**
 * The Patch Apple Authenticator Options Request class
 * @export
 * @interface PatchAuthenticatorsAppleOptionsRequest
 */
export interface PatchAuthenticatorsAppleOptionsRequest {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticatorsAppleOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticatorsAppleOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * If set to true, will use the internal keys for authentication
   * @type {boolean}
   * @memberof PatchAuthenticatorsAppleOptionsRequest
   */
  use_internal_keys?: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof PatchAuthenticatorsAppleOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsAppleOptionsRequest
   */
  client_id?: string | null;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsAppleOptionsRequest
   */
  client_secret?: string | null;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof PatchAuthenticatorsAppleOptionsRequest
   */
  scopes?: string[];
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof PatchAuthenticatorsAppleOptionsRequest
   */
  trust_email_verified_scope?: boolean;
  /**
   * Apple generated teamId
   * @type {string}
   * @memberof PatchAuthenticatorsAppleOptionsRequest
   */
  team_id?: string | null;
  /**
   * Apple generated keyId
   * @type {string}
   * @memberof PatchAuthenticatorsAppleOptionsRequest
   */
  key_id?: string | null;
}
