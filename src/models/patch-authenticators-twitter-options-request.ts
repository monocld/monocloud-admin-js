/**
 * The Patch Twitter Authenticator Options Request class
 * @export
 * @interface PatchAuthenticatorsTwitterOptionsRequest
 */
export interface PatchAuthenticatorsTwitterOptionsRequest {
  /**
   * Enable External Provider Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticatorsTwitterOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable External Provider Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticatorsTwitterOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * If set to true, will sync the profile with each login
   * @type {boolean}
   * @memberof PatchAuthenticatorsTwitterOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * Client Id issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsTwitterOptionsRequest
   */
  client_id?: string;
  /**
   * Client Secret issued for the customer by provider
   * @type {string}
   * @memberof PatchAuthenticatorsTwitterOptionsRequest
   */
  client_secret?: string;
}
