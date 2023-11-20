/**
 * The SignUp Generic Restrictions Options response class
 * @export
 * @interface SignUpGenericRestrictionsOptions
 */
export interface SignUpGenericRestrictionsOptions {
  /**
   * Specifies whether or not the restriction is enabled.
   * @type {boolean}
   * @memberof SignUpGenericRestrictionsOptions
   */
  enabled: boolean;
  /**
   * List of Emails, Phone numbers, and top-level domains to be considered for access control.
   * @type {string[]}
   * @memberof SignUpGenericRestrictionsOptions
   */
  identifiers: string[];
}
