/**
 * The Patch LinkedIn Authenticator Options Request class
 * @export
 * @interface PatchAuthenticatorsLinkedInOptionsRequest
 */
export interface PatchAuthenticatorsLinkedInOptionsRequest {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticatorsLinkedInOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticatorsLinkedInOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof PatchAuthenticatorsLinkedInOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsLinkedInOptionsRequest
   */
  client_id?: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsLinkedInOptionsRequest
   */
  client_secret?: string;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof PatchAuthenticatorsLinkedInOptionsRequest
   */
  scopes?: string[] | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof PatchAuthenticatorsLinkedInOptionsRequest
   */
  trust_email_verified_scope?: boolean;
}
