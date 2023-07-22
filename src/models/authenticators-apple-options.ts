/**
 * The Apple Authenticator Options Response class
 * @export
 * @interface AuthenticatorsAppleOptions
 */
export interface AuthenticatorsAppleOptions {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof AuthenticatorsAppleOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof AuthenticatorsAppleOptions
   */
  enable_sign_up: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof AuthenticatorsAppleOptions
   */
  sync_user_profile_always: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsAppleOptions
   */
  client_id: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsAppleOptions
   */
  client_secret: string;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof AuthenticatorsAppleOptions
   */
  scopes?: string[] | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof AuthenticatorsAppleOptions
   */
  trust_email_verified_scope: boolean;
  /**
   * Apple generated teamId
   * @type {string}
   * @memberof AuthenticatorsAppleOptions
   */
  team_id: string;
  /**
   * Apple generated keyId
   * @type {string}
   * @memberof AuthenticatorsAppleOptions
   */
  key_id: string;
}
