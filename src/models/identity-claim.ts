/**
 * The Identity Claim response class
 * @export
 * @interface IdentityClaim
 */
export interface IdentityClaim {
  /**
   * Specifies the name of the claim.
   * @type {string}
   * @memberof IdentityClaim
   */
  claim: string;
  /**
   * Specifies whether the claim will be included in the Identity Token.
   * @type {boolean}
   * @memberof IdentityClaim
   */
  include_in_identity_token: boolean;
  /**
   * Specifies whether the claim will be returned from the user info endpoint.
   * @type {boolean}
   * @memberof IdentityClaim
   */
  include_in_user_info: boolean;
  /**
   * Specifies whether the claim will be included in the Access Token.
   * @type {boolean}
   * @memberof IdentityClaim
   */
  include_in_access_token: boolean;
}
