/**
 * The Xero Authenticator Options response class
 * @export
 * @interface AuthenticatorsXeroOptions
 */
export interface AuthenticatorsXeroOptions {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof AuthenticatorsXeroOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof AuthenticatorsXeroOptions
   */
  enable_sign_up: boolean;
  /**
   * If set to true, will use the internal keys for authentication
   * @type {boolean}
   * @memberof AuthenticatorsXeroOptions
   */
  use_internal_keys: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof AuthenticatorsXeroOptions
   */
  sync_user_profile_always: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsXeroOptions
   */
  client_id?: string | null;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsXeroOptions
   */
  client_secret?: string | null;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof AuthenticatorsXeroOptions
   */
  scopes: string[];
  /**
   * Specifies if we should treat the email received from the external provider as verified.
   * @type {boolean}
   * @memberof AuthenticatorsXeroOptions
   */
  treat_email_as_verified: boolean;
}
