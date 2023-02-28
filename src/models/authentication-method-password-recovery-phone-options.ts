/**
 * The Authentication Method Password Recovery Phone response class
 * @export
 * @interface AuthenticationMethodPasswordRecoveryPhoneOptions
 */
export interface AuthenticationMethodPasswordRecoveryPhoneOptions {
  /**
   * Enable Password recovery through Phone.
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordRecoveryPhoneOptions
   */
  enabled: boolean;
  /**
   * Code expiration time in seconds.
   * @type {number}
   * @memberof AuthenticationMethodPasswordRecoveryPhoneOptions
   */
  otp_expiry: number;
  /**
   * Code length is chosen from this option
   * @type {number}
   * @memberof AuthenticationMethodPasswordRecoveryPhoneOptions
   */
  otp_length: number;
}
