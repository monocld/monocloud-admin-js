/**
 * The Scope Claim response class
 * @export
 * @interface ScopeClaim
 */
export interface ScopeClaim {
  /**
   * Specifies the name of the claim.
   * @type {string}
   * @memberof ScopeClaim
   */
  claim: string;
  /**
   * Specifies whether the claim will be included in the Identity Token.
   * @type {boolean}
   * @memberof ScopeClaim
   */
  include_in_identity_token: boolean;
  /**
   * Specifies whether the claim will be returned from the user info endpoint.
   * @type {boolean}
   * @memberof ScopeClaim
   */
  include_in_user_info: boolean;
}
