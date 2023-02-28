/**
 * The Logout Options response class
 * @export
 * @interface LogoutOptions
 */
export interface LogoutOptions {
  /**
   * Specifies whether the user should be automatically redirected to the client specified URL after sign out.
   * @type {boolean}
   * @memberof LogoutOptions
   */
  automatic_redirect_after_logout: boolean;
  /**
   * Specifies whether there should be a prompt before log out.
   * @type {boolean}
   * @memberof LogoutOptions
   */
  show_logout_prompt: boolean;
}
