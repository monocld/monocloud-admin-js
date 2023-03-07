/**
 * The Apple Provider Options response class
 * @export
 * @interface ExternalProviderAppleOptions
 */
export interface ExternalProviderAppleOptions {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof ExternalProviderAppleOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof ExternalProviderAppleOptions
   */
  enable_sign_up: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof ExternalProviderAppleOptions
   */
  sync_user_profile_always: boolean;
  /**
   * Specifies whether the tokens issued by the the provider be saved
   * @type {boolean}
   * @memberof ExternalProviderAppleOptions
   */
  save_tokens: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof ExternalProviderAppleOptions
   */
  client_id: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof ExternalProviderAppleOptions
   */
  client_secret: string;
  /**
   * List of provider scopes to be obtained
   * @type {string[]}
   * @memberof ExternalProviderAppleOptions
   */
  scopes?: string[] | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof ExternalProviderAppleOptions
   */
  trust_email_verified_scope: boolean;
  /**
   * Apple generated teamId
   * @type {string}
   * @memberof ExternalProviderAppleOptions
   */
  team_id: string;
  /**
   * Apple generated keyId
   * @type {string}
   * @memberof ExternalProviderAppleOptions
   */
  key_id: string;
}
