/**
 * The Phone Recovery Method Options response class
 * @export
 * @interface RecoveryMethodsPhoneOptions
 */
export interface RecoveryMethodsPhoneOptions {
  /**
   * Enable Password recovery through Phone.
   * @type {boolean}
   * @memberof RecoveryMethodsPhoneOptions
   */
  enabled: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof RecoveryMethodsPhoneOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof RecoveryMethodsPhoneOptions
   */
  code_length: number;
}
