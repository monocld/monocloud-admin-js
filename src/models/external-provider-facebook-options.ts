/**
 * The Facebook Provider Options response class
 * @export
 * @interface ExternalProviderFacebookOptions
 */
export interface ExternalProviderFacebookOptions {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof ExternalProviderFacebookOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof ExternalProviderFacebookOptions
   */
  enable_sign_up: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof ExternalProviderFacebookOptions
   */
  sync_user_profile_always: boolean;
  /**
   * Specifies whether the tokens issued by the the provider be saved
   * @type {boolean}
   * @memberof ExternalProviderFacebookOptions
   */
  save_tokens: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof ExternalProviderFacebookOptions
   */
  client_id: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof ExternalProviderFacebookOptions
   */
  client_secret: string;
  /**
   * List of provider scopes to be obtained
   * @type {Array<string>}
   * @memberof ExternalProviderFacebookOptions
   */
  scopes?: Array<string> | null;
  /**
   * Specifies if we should trust the email verified scope received from the external provider.
   * @type {boolean}
   * @memberof ExternalProviderFacebookOptions
   */
  trust_email_verified_scope: boolean;
  /**
   * Required claims from facebook
   * @type {Set<string>}
   * @memberof ExternalProviderFacebookOptions
   */
  fields?: Set<string> | null;
}
