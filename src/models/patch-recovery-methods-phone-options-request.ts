/**
 * The Patch Phone Recovery Method Options Request class
 * @export
 * @interface PatchRecoveryMethodsPhoneOptionsRequest
 */
export interface PatchRecoveryMethodsPhoneOptionsRequest {
  /**
   * Enable Password recovery through Phone.
   * @type {boolean}
   * @memberof PatchRecoveryMethodsPhoneOptionsRequest
   */
  enabled?: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof PatchRecoveryMethodsPhoneOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchRecoveryMethodsPhoneOptionsRequest
   */
  code_length?: number;
}
