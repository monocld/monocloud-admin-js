import { TokenSendTypes } from './token-send-types';

/**
 * The Patch authentication method password recovery email options request class
 * @export
 * @interface PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
 */
export interface PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest {
  /**
   * Enable Password recovery through Email.
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
   */
  enabled?: boolean;
  /**
   * Specifies the recovery mode.
   * @type {TokenSendTypes}
   * @memberof PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
   */
  mode?: TokenSendTypes;
  /**
   * Email expiration time in seconds.
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
   */
  otp_expiry?: number;
  /**
   * If Email Code is Selected, Code length is chosen from this option
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
   */
  otp_length?: number;
}
