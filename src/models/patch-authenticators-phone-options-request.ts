/**
 * The Patch Phone Authenticator Options Request class
 * @export
 * @interface PatchAuthenticatorsPhoneOptionsRequest
 */
export interface PatchAuthenticatorsPhoneOptionsRequest {
  /**
   * Enable Phone Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticatorsPhoneOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable Phone Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticatorsPhoneOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Enable Phone Jit Provisioning
   * @type {boolean}
   * @memberof PatchAuthenticatorsPhoneOptionsRequest
   */
  enable_jit_provisioning?: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof PatchAuthenticatorsPhoneOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchAuthenticatorsPhoneOptionsRequest
   */
  code_length?: number;
}
