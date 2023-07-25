/**
 * The Patch Username Identifier Options Request class
 * @export
 * @interface PatchIdentifiersUsernameOptionsRequest
 */
export interface PatchIdentifiersUsernameOptionsRequest {
  /**
   * Specifies if the users are allowed to sign-in using a username
   * @type {boolean}
   * @memberof PatchIdentifiersUsernameOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies if the users are allowed to enter a username at the time of registration.
   * @type {boolean}
   * @memberof PatchIdentifiersUsernameOptionsRequest
   */
  show_at_sign_up?: boolean;
  /**
   * Specifies if the username is required at the time of registration.
   * @type {boolean}
   * @memberof PatchIdentifiersUsernameOptionsRequest
   */
  required_at_sign_up?: boolean;
  /**
   * Specifies the minimum length required for the username.
   * @type {number}
   * @memberof PatchIdentifiersUsernameOptionsRequest
   */
  minimum_length?: number;
}
