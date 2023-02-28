import { TokenSendTypes } from './token-send-types';

/**
 * The Authentication Method Password Recovery Email response class
 * @export
 * @interface AuthenticationMethodPasswordRecoveryEmailOptions
 */
export interface AuthenticationMethodPasswordRecoveryEmailOptions {
  /**
   * Enable Password recovery through Email.
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordRecoveryEmailOptions
   */
  enabled: boolean;
  /**
   * Specifies the recovery mode.
   * @type {TokenSendTypes}
   * @memberof AuthenticationMethodPasswordRecoveryEmailOptions
   */
  mode: TokenSendTypes;
  /**
   * Email expiration time in seconds.
   * @type {number}
   * @memberof AuthenticationMethodPasswordRecoveryEmailOptions
   */
  otp_expiry: number;
  /**
   * If Email Code is Selected, Code length is chosen from this option
   * @type {number}
   * @memberof AuthenticationMethodPasswordRecoveryEmailOptions
   */
  otp_length: number;
}
