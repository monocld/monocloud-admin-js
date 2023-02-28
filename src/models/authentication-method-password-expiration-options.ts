/**
 * The Authentication Method Password Expiration response class
 * @export
 * @interface AuthenticationMethodPasswordExpirationOptions
 */
export interface AuthenticationMethodPasswordExpirationOptions {
  /**
   * Specifies the expiration mode.
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordExpirationOptions
   */
  enabled: boolean;
  /**
   * Specifies the password expiration period in minutes.
   * @type {number}
   * @memberof AuthenticationMethodPasswordExpirationOptions
   */
  expiration_period: number;
}
