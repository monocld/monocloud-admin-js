/**
 * The Authentication Method Sms Code response class
 * @export
 * @interface AuthenticationMethodSmsCodeOptions
 */
export interface AuthenticationMethodSmsCodeOptions {
  /**
   * Enable Sms Code Sign-in
   * @type {boolean}
   * @memberof AuthenticationMethodSmsCodeOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable Sms Code Sign-up
   * @type {boolean}
   * @memberof AuthenticationMethodSmsCodeOptions
   */
  enable_sign_up: boolean;
  /**
   * Enable Sms Code Enable Jit Provisioning
   * @type {boolean}
   * @memberof AuthenticationMethodSmsCodeOptions
   */
  enable_jit_provisioning: boolean;
  /**
   * Specifies the expiration time in seconds for the OTP to be generated
   * @type {number}
   * @memberof AuthenticationMethodSmsCodeOptions
   */
  otp_expiry: number;
  /**
   * Specifies the OTP character length
   * @type {number}
   * @memberof AuthenticationMethodSmsCodeOptions
   */
  otp_length: number;
}
