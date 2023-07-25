/**
 * The Phone Authenticator Options response class
 * @export
 * @interface AuthenticatorsPhoneOptions
 */
export interface AuthenticatorsPhoneOptions {
  /**
   * Enable Phone Sign-in
   * @type {boolean}
   * @memberof AuthenticatorsPhoneOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable Phone Sign-up
   * @type {boolean}
   * @memberof AuthenticatorsPhoneOptions
   */
  enable_sign_up: boolean;
  /**
   * Enable Phone Jit Provisioning
   * @type {boolean}
   * @memberof AuthenticatorsPhoneOptions
   */
  enable_jit_provisioning: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof AuthenticatorsPhoneOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof AuthenticatorsPhoneOptions
   */
  code_length: number;
}
