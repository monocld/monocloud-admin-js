/**
 * The Google Provider Options response class
 * @export
 * @interface ExternalProviderGoogleOptions
 */
export interface ExternalProviderGoogleOptions {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof ExternalProviderGoogleOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof ExternalProviderGoogleOptions
   */
  enable_sign_up: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof ExternalProviderGoogleOptions
   */
  sync_user_profile_always: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof ExternalProviderGoogleOptions
   */
  client_id: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof ExternalProviderGoogleOptions
   */
  client_secret: string;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof ExternalProviderGoogleOptions
   */
  scopes?: string[] | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof ExternalProviderGoogleOptions
   */
  trust_email_verified_scope: boolean;
}
