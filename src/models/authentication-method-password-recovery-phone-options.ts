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
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof AuthenticationMethodPasswordRecoveryPhoneOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof AuthenticationMethodPasswordRecoveryPhoneOptions
   */
  code_length: number;
}
