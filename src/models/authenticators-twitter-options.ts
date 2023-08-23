/**
 * The Twitter Authenticator Options response class
 * @export
 * @interface AuthenticatorsTwitterOptions
 */
export interface AuthenticatorsTwitterOptions {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof AuthenticatorsTwitterOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof AuthenticatorsTwitterOptions
   */
  enable_sign_up: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof AuthenticatorsTwitterOptions
   */
  sync_user_profile_always: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsTwitterOptions
   */
  client_id: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsTwitterOptions
   */
  client_secret: string;
  /**
   * Specifies if we should treat the email received from the external provider as verified.
   * @type {boolean}
   * @memberof AuthenticatorsTwitterOptions
   */
  treat_email_as_verified: boolean;
}
