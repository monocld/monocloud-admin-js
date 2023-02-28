/**
 * The Create Claim class
 * @export
 * @interface CreateClaimRequest
 */
export interface CreateClaimRequest {
  /**
   * Specifies the type of the claim
   * @type {string}
   * @memberof CreateClaimRequest
   */
  type: string;
  /**
   * Specifies the value of the claim
   * @type {string}
   * @memberof CreateClaimRequest
   */
  value: string;
  /**
   * Specifies the type of the claim value
   * @type {string}
   * @memberof CreateClaimRequest
   */
  value_type: string;
}
