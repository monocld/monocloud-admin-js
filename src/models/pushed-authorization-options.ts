/**
 * The Pushed Authorization Options response class
 * @export
 * @interface PushedAuthorizationOptions
 */
export interface PushedAuthorizationOptions {
  /**
   * Specifies whether Pushed Authorization Requests are enabled.
   * @type {boolean}
   * @memberof PushedAuthorizationOptions
   */
  enable_pushed_authorization_requests: boolean;
  /**
   * Specifies whether Pushed Authorization Requests are required for authorization.
   * @type {boolean}
   * @memberof PushedAuthorizationOptions
   */
  require_pushed_authorization_requests: boolean;
}
