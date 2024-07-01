/**
 * The Patch Pushed Authorization Options Request class
 * @export
 * @interface PatchPushedAuthorizationOptionsRequest
 */
export interface PatchPushedAuthorizationOptionsRequest {
  /**
   * Specifies whether Pushed Authorization Requests are enabled.
   * @type {boolean}
   * @memberof PatchPushedAuthorizationOptionsRequest
   */
  enable_pushed_authorization_requests?: boolean;
  /**
   * Specifies whether Pushed Authorization Requests are required for authorization.
   * @type {boolean}
   * @memberof PatchPushedAuthorizationOptionsRequest
   */
  require_pushed_authorization_requests?: boolean;
}
