/**
 * The Patch Authentication Method Email Code Options Request class
 * @export
 * @interface PatchAuthenticationMethodEmailCodeOptionsRequest
 */
export interface PatchAuthenticationMethodEmailCodeOptionsRequest {
  /**
   * Enable Email Code Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticationMethodEmailCodeOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable Email Code Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticationMethodEmailCodeOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Enable Email Code Enable Jit Provisioning
   * @type {boolean}
   * @memberof PatchAuthenticationMethodEmailCodeOptionsRequest
   */
  enable_jit_provisioning?: boolean;
  /**
   * Specifies the expiration time in seconds for the OTP to be generated
   * @type {number}
   * @memberof PatchAuthenticationMethodEmailCodeOptionsRequest
   */
  otp_expiry?: number;
  /**
   * Specifies the OTP character length
   * @type {number}
   * @memberof PatchAuthenticationMethodEmailCodeOptionsRequest
   */
  otp_length?: number;
}
