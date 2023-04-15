/**
 * The Patch authentication method password recovery phone options request class
 * @export
 * @interface PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest
 */
export interface PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest {
  /**
   * Enable Password recovery through Phone.
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest
   */
  enabled?: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordRecoveryPhoneOptionsRequest
   */
  code_length?: number;
}
