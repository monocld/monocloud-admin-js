/**
 * The Patch Authentication Method Password Expiration Options Request class
 * @export
 * @interface PatchAuthenticationMethodPasswordExpirationOptionsRequest
 */
export interface PatchAuthenticationMethodPasswordExpirationOptionsRequest {
  /**
   * Specifies the expiration mode.
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordExpirationOptionsRequest
   */
  enabled?: boolean;
  /**
   * Specifies the password expiration period in minutes.
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordExpirationOptionsRequest
   */
  expiration_period?: number;
}
