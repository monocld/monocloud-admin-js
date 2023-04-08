/**
 * The Create Identity Claim Request class
 * @export
 * @interface CreateIdentityClaimRequest
 */
export interface CreateIdentityClaimRequest {
  /**
   * Specifies the name of the claim.
   * @type {string}
   * @memberof CreateIdentityClaimRequest
   */
  claim: string;
  /**
   * Specifies whether the claim will be included in the Identity Token.
   * @type {boolean}
   * @memberof CreateIdentityClaimRequest
   */
  include_in_identity_token: boolean;
  /**
   * Specifies whether the claim will be returned from the user info endpoint.
   * @type {boolean}
   * @memberof CreateIdentityClaimRequest
   */
  include_in_user_info: boolean;
}
