import { ValueTypes } from './value-types';

/**
 * The SignUp Custom Field Options response class
 * @export
 * @interface SignUpCustomFieldOptions
 */
export interface SignUpCustomFieldOptions {
  /**
   * Specifies if the users are allowed to enter the claim at the time of signup.
   * @type {boolean}
   * @memberof SignUpCustomFieldOptions
   */
  enabled: boolean;
  /**
   * Specifies if the claim is required at the time of signup.
   * @type {boolean}
   * @memberof SignUpCustomFieldOptions
   */
  required: boolean;
  /**
   * Specifies the name for the claim.
   * @type {string}
   * @memberof SignUpCustomFieldOptions
   */
  claim_name: string;
  /**
   * Specifies the claim value type.
   * @type {ValueTypes}
   * @memberof SignUpCustomFieldOptions
   */
  value_type: ValueTypes;
  /**
   * Specifies the label to be used for the claim at the time of signup.
   * @type {string}
   * @memberof SignUpCustomFieldOptions
   */
  label: string;
}
