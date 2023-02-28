/**
 * The Patch Authentication Method Sms Code Options Request class
 * @export
 * @interface PatchAuthenticationMethodSmsCodeOptionsRequest
 */
export interface PatchAuthenticationMethodSmsCodeOptionsRequest {
  /**
   * Enable Sms Code Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticationMethodSmsCodeOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable Sms Code Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticationMethodSmsCodeOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Enable Sms Code Enable Jit Provisioning
   * @type {boolean}
   * @memberof PatchAuthenticationMethodSmsCodeOptionsRequest
   */
  enable_jit_provisioning?: boolean;
  /**
   * Specifies the expiration time in seconds for the OTP to be generated
   * @type {number}
   * @memberof PatchAuthenticationMethodSmsCodeOptionsRequest
   */
  otp_expiry?: number;
  /**
   * Specifies the OTP character length
   * @type {number}
   * @memberof PatchAuthenticationMethodSmsCodeOptionsRequest
   */
  otp_length?: number;
}
