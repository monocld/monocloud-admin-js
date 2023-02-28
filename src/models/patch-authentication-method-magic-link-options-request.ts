/**
 * The Patch Authentication Method Magic Link Options Request class
 * @export
 * @interface PatchAuthenticationMethodMagicLinkOptionsRequest
 */
export interface PatchAuthenticationMethodMagicLinkOptionsRequest {
  /**
   * Enable Magic Link Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticationMethodMagicLinkOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable Magic Link Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticationMethodMagicLinkOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Enable Magic Link Enable Jit Provisioning
   * @type {boolean}
   * @memberof PatchAuthenticationMethodMagicLinkOptionsRequest
   */
  enable_jit_provisioning?: boolean;
  /**
   * Specifies the expiration time in seconds for the OTP to be generated
   * @type {number}
   * @memberof PatchAuthenticationMethodMagicLinkOptionsRequest
   */
  link_expiry?: number;
}
