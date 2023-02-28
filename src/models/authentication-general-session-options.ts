import { RememberMeModes } from './remember-me-modes';

/**
 * The Authentication General Session response class
 * @export
 * @interface AuthenticationGeneralSessionOptions
 */
export interface AuthenticationGeneralSessionOptions {
  /**
   * RememberMe Mode
   * @type {RememberMeModes}
   * @memberof AuthenticationGeneralSessionOptions
   */
  remember_me_mode: RememberMeModes;
  /**
   * Specifies the duration in minutes after which the user session will expire in accordance with the remember me mode.
   * @type {number}
   * @memberof AuthenticationGeneralSessionOptions
   */
  remember_me_duration: number;
  /**
   * Specifies the duration in minutes after which the user session will expire regardless of the remember me mode.
   * @type {number}
   * @memberof AuthenticationGeneralSessionOptions
   */
  logout_after: number;
}
