/**
 * The Patch Google Authenticator Options Request class
 * @export
 * @interface PatchAuthenticatorsGoogleOptionsRequest
 */
export interface PatchAuthenticatorsGoogleOptionsRequest {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticatorsGoogleOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticatorsGoogleOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * If set to true, will use the internal keys for authentication
   * @type {boolean}
   * @memberof PatchAuthenticatorsGoogleOptionsRequest
   */
  use_internal_keys?: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof PatchAuthenticatorsGoogleOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsGoogleOptionsRequest
   */
  client_id?: string | null;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsGoogleOptionsRequest
   */
  client_secret?: string | null;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof PatchAuthenticatorsGoogleOptionsRequest
   */
  scopes?: string[];
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof PatchAuthenticatorsGoogleOptionsRequest
   */
  trust_email_verified_scope?: boolean;
}
