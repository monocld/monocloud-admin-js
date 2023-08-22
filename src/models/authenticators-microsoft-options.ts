/**
 * The Microsoft Authenticator Options response class
 * @export
 * @interface AuthenticatorsMicrosoftOptions
 */
export interface AuthenticatorsMicrosoftOptions {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof AuthenticatorsMicrosoftOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof AuthenticatorsMicrosoftOptions
   */
  enable_sign_up: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof AuthenticatorsMicrosoftOptions
   */
  sync_user_profile_always: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsMicrosoftOptions
   */
  client_id: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof AuthenticatorsMicrosoftOptions
   */
  client_secret: string;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof AuthenticatorsMicrosoftOptions
   */
  scopes?: string[] | null;
  /**
   * Specifies if we should treat the email received from the external provider as verified.
   * @type {boolean}
   * @memberof AuthenticatorsMicrosoftOptions
   */
  treat_email_as_verified: boolean;
}
