/**
 * The Authentication Method Phone response class
 * @export
 * @interface AuthenticationMethodPhoneOptions
 */
export interface AuthenticationMethodPhoneOptions {
  /**
   * Enable Phone Sign-in
   * @type {boolean}
   * @memberof AuthenticationMethodPhoneOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable Phone Sign-up
   * @type {boolean}
   * @memberof AuthenticationMethodPhoneOptions
   */
  enable_sign_up: boolean;
  /**
   * Enable Phone Enable Jit Provisioning
   * @type {boolean}
   * @memberof AuthenticationMethodPhoneOptions
   */
  enable_jit_provisioning: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof AuthenticationMethodPhoneOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof AuthenticationMethodPhoneOptions
   */
  code_length: number;
}
