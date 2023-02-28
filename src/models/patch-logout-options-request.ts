/**
 * The Patch Logout Options Request class
 * @export
 * @interface PatchLogoutOptionsRequest
 */
export interface PatchLogoutOptionsRequest {
  /**
   * Specifies whether the user should be automatically redirected to the client specified URL after sign out.
   * @type {boolean}
   * @memberof PatchLogoutOptionsRequest
   */
  automatic_redirect_after_logout?: boolean;
  /**
   * Specifies whether there should be a prompt before log out.
   * @type {boolean}
   * @memberof PatchLogoutOptionsRequest
   */
  show_logout_prompt?: boolean;
}
