/**
 * The Authentication General Username response class
 * @export
 * @interface AuthenticationGeneralUsernameOptions
 */
export interface AuthenticationGeneralUsernameOptions {
  /**
   * Specifies if the users are allowed to sign-in using a username
   * @type {boolean}
   * @memberof AuthenticationGeneralUsernameOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies if the users are allowed to enter a username at the time of registration.
   * @type {boolean}
   * @memberof AuthenticationGeneralUsernameOptions
   */
  show_at_sign_up: boolean;
  /**
   * Specifies if the username is required at the time of registration.
   * @type {boolean}
   * @memberof AuthenticationGeneralUsernameOptions
   */
  required_at_sign_up: boolean;
  /**
   * Specifies the minimum length required for the username.
   * @type {number}
   * @memberof AuthenticationGeneralUsernameOptions
   */
  minimum_length: number;
}
