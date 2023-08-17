/**
 * The Patch Microsoft Authenticator Options Request class
 * @export
 * @interface PatchAuthenticatorsMicrosoftOptionsRequest
 */
export interface PatchAuthenticatorsMicrosoftOptionsRequest {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticatorsMicrosoftOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticatorsMicrosoftOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof PatchAuthenticatorsMicrosoftOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsMicrosoftOptionsRequest
   */
  client_id?: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsMicrosoftOptionsRequest
   */
  client_secret?: string;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof PatchAuthenticatorsMicrosoftOptionsRequest
   */
  scopes?: string[] | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof PatchAuthenticatorsMicrosoftOptionsRequest
   */
  trust_email_verified_scope?: boolean;
}
