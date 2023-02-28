/**
 * The Authentication Method Magic Link response class
 * @export
 * @interface AuthenticationMethodMagicLinkOptions
 */
export interface AuthenticationMethodMagicLinkOptions {
  /**
   * Enable Magic Link Sign-in
   * @type {boolean}
   * @memberof AuthenticationMethodMagicLinkOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable Magic Link Sign-up
   * @type {boolean}
   * @memberof AuthenticationMethodMagicLinkOptions
   */
  enable_sign_up: boolean;
  /**
   * Enable Magic Link Enable Jit Provisioning
   * @type {boolean}
   * @memberof AuthenticationMethodMagicLinkOptions
   */
  enable_jit_provisioning: boolean;
  /**
   * Specifies the expiration time in seconds for the OTP to be generated
   * @type {number}
   * @memberof AuthenticationMethodMagicLinkOptions
   */
  link_expiry: number;
}
