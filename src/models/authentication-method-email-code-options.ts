/**
 * The Authentication Method Email Code response class
 * @export
 * @interface AuthenticationMethodEmailCodeOptions
 */
export interface AuthenticationMethodEmailCodeOptions {
  /**
   * Enable Email Code Sign-in
   * @type {boolean}
   * @memberof AuthenticationMethodEmailCodeOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable Email Code Sign-up
   * @type {boolean}
   * @memberof AuthenticationMethodEmailCodeOptions
   */
  enable_sign_up: boolean;
  /**
   * Enable Email Code Enable Jit Provisioning
   * @type {boolean}
   * @memberof AuthenticationMethodEmailCodeOptions
   */
  enable_jit_provisioning: boolean;
  /**
   * Specifies the expiration time in seconds for the OTP to be generated
   * @type {number}
   * @memberof AuthenticationMethodEmailCodeOptions
   */
  otp_expiry: number;
  /**
   * Specifies the OTP character length
   * @type {number}
   * @memberof AuthenticationMethodEmailCodeOptions
   */
  otp_length: number;
}
