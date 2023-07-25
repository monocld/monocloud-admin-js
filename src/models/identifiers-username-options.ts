/**
 * The Username Identifier Options response class
 * @export
 * @interface IdentifiersUsernameOptions
 */
export interface IdentifiersUsernameOptions {
  /**
   * Specifies if the users are allowed to sign-in using a username
   * @type {boolean}
   * @memberof IdentifiersUsernameOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies if the users are allowed to enter a username at the time of registration.
   * @type {boolean}
   * @memberof IdentifiersUsernameOptions
   */
  show_at_sign_up: boolean;
  /**
   * Specifies if the username is required at the time of registration.
   * @type {boolean}
   * @memberof IdentifiersUsernameOptions
   */
  required_at_sign_up: boolean;
  /**
   * Specifies the minimum length required for the username.
   * @type {number}
   * @memberof IdentifiersUsernameOptions
   */
  minimum_length: number;
}
