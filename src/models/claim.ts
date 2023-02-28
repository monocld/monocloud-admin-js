/**
 * The Claim response class
 * @export
 * @interface Claim
 */
export interface Claim {
  /**
   * Specifies the type of the claim
   * @type {string}
   * @memberof Claim
   */
  type: string;
  /**
   * Specifies the value of the claim
   * @type {string}
   * @memberof Claim
   */
  value: string;
  /**
   * Specifies the type of the claim value
   * @type {string}
   * @memberof Claim
   */
  value_type: string;
}
