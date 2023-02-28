/**
 * The Patch General Username Authentication Options Request class
 * @export
 * @interface PatchAuthenticationGeneralUsernameOptionsRequest
 */
export interface PatchAuthenticationGeneralUsernameOptionsRequest {
  /**
   * Specifies if the users are allowed to sign-in using a username
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralUsernameOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies if the users are allowed to enter a username at the time of registration.
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralUsernameOptionsRequest
   */
  show_at_sign_up?: boolean;
  /**
   * Specifies if the username is required at the time of registration.
   * @type {boolean}
   * @memberof PatchAuthenticationGeneralUsernameOptionsRequest
   */
  required_at_sign_up?: boolean;
  /**
   * Specifies the minimum length required for the username.
   * @type {number}
   * @memberof PatchAuthenticationGeneralUsernameOptionsRequest
   */
  minimum_length?: number;
}
