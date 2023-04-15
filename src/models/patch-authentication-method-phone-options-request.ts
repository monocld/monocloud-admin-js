/**
 * The Patch Authentication Method Phone Options Request class
 * @export
 * @interface PatchAuthenticationMethodPhoneOptionsRequest
 */
export interface PatchAuthenticationMethodPhoneOptionsRequest {
  /**
   * Enable Phone Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPhoneOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable Phone Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPhoneOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Enable Phone Enable Jit Provisioning
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPhoneOptionsRequest
   */
  enable_jit_provisioning?: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof PatchAuthenticationMethodPhoneOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchAuthenticationMethodPhoneOptionsRequest
   */
  code_length?: number;
}
