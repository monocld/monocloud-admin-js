/**
 * The Patch SignUp Generic Restrictions Options Request class
 * @export
 * @interface PatchSignUpRestrictionsOptionsRequest
 */
export interface PatchSignUpRestrictionsOptionsRequest {
  /**
   * Specifies whether or not the restriction is enabled.
   * @type {boolean}
   * @memberof PatchSignUpRestrictionsOptionsRequest
   */
  enabled?: boolean;
  /**
   * List of Emails, Phone numbers, and top-level domains to be considered for access control.
   * @type {string[]}
   * @memberof PatchSignUpRestrictionsOptionsRequest
   */
  identifiers?: string[];
}
