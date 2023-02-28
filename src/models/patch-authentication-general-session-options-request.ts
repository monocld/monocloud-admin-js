import { RememberMeModes } from './remember-me-modes';

/**
 * The Patch General Session Authentication Options Request class
 * @export
 * @interface PatchAuthenticationGeneralSessionOptionsRequest
 */
export interface PatchAuthenticationGeneralSessionOptionsRequest {
  /**
   * RememberMe Mode
   * @type {RememberMeModes}
   * @memberof PatchAuthenticationGeneralSessionOptionsRequest
   */
  remember_me_mode?: RememberMeModes;
  /**
   * Specifies the duration in minutes after which the user session will expire in accordance with the remember me mode.
   * @type {number}
   * @memberof PatchAuthenticationGeneralSessionOptionsRequest
   */
  remember_me_duration?: number;
  /**
   * Specifies the duration in minutes after which the user session will expire regardless of the remember me mode.
   * @type {number}
   * @memberof PatchAuthenticationGeneralSessionOptionsRequest
   */
  logout_after?: number;
}
