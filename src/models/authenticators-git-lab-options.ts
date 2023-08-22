/**
 * The GitLab Authenticator Options response class
 * @export
 * @interface AuthenticatorsGitLabOptions
 */
export interface AuthenticatorsGitLabOptions {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof AuthenticatorsGitLabOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof AuthenticatorsGitLabOptions
   */
  enable_sign_up: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof AuthenticatorsGitLabOptions
   */
  sync_user_profile_always: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsGitLabOptions
   */
  client_id: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsGitLabOptions
   */
  client_secret: string;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof AuthenticatorsGitLabOptions
   */
  scopes?: string[] | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof AuthenticatorsGitLabOptions
   */
  trust_email_verified_scope: boolean;
}
