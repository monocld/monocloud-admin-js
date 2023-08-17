/**
 * The Patch Facebook Authenticator Options Request class
 * @export
 * @interface PatchAuthenticatorsFacebookOptionsRequest
 */
export interface PatchAuthenticatorsFacebookOptionsRequest {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticatorsFacebookOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticatorsFacebookOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof PatchAuthenticatorsFacebookOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsFacebookOptionsRequest
   */
  client_id?: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsFacebookOptionsRequest
   */
  client_secret?: string;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof PatchAuthenticatorsFacebookOptionsRequest
   */
  scopes?: string[] | null;
}
