/**
 * The Create Scope Claim Request class
 * @export
 * @interface CreateScopeClaimRequest
 */
export interface CreateScopeClaimRequest {
  /**
   * Specifies the name of the claim.
   * @type {string}
   * @memberof CreateScopeClaimRequest
   */
  claim: string;
  /**
   * Specifies whether the claim will be included in the Identity Token.
   * @type {boolean}
   * @memberof CreateScopeClaimRequest
   */
  include_in_identity_token?: boolean;
  /**
   * Specifies whether the claim will be returned from the user info endpoint.
   * @type {boolean}
   * @memberof CreateScopeClaimRequest
   */
  include_in_user_info?: boolean;
}
