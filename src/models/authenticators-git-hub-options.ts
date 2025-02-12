/**
 * The GitHub Authenticator Options response class
 * @export
 * @interface AuthenticatorsGitHubOptions
 */
export interface AuthenticatorsGitHubOptions {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof AuthenticatorsGitHubOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof AuthenticatorsGitHubOptions
   */
  enable_sign_up: boolean;
  /**
   * If set to true, will use the internal keys for authentication
   * @type {boolean}
   * @memberof AuthenticatorsGitHubOptions
   */
  use_internal_keys: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof AuthenticatorsGitHubOptions
   */
  sync_user_profile_always: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsGitHubOptions
   */
  client_id?: string | null;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsGitHubOptions
   */
  client_secret?: string | null;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof AuthenticatorsGitHubOptions
   */
  scopes: string[];
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof AuthenticatorsGitHubOptions
   */
  trust_email_verified_scope: boolean;
}
