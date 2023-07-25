/**
 * The Patch Password Authenticator Strength Options Request class
 * @export
 * @interface PatchAuthenticatorsPasswordStrengthOptionsRequest
 */
export interface PatchAuthenticatorsPasswordStrengthOptionsRequest {
  /**
   * Specifies the minimum character length of password
   * @type {number}
   * @memberof PatchAuthenticatorsPasswordStrengthOptionsRequest
   */
  minimum_length?: number;
  /**
   * Specifies the whether a non alphanumeric character is required in the password.
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasswordStrengthOptionsRequest
   */
  require_non_alphanumeric_character?: boolean;
  /**
   * Specifies the whether a digit is required in the password.
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasswordStrengthOptionsRequest
   */
  require_digit?: boolean;
  /**
   * Specifies the whether a lowercase character is required in the password.
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasswordStrengthOptionsRequest
   */
  require_lowercase_character?: boolean;
  /**
   * Specifies the whether a uppercase character is required in the password.
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasswordStrengthOptionsRequest
   */
  require_uppercase_character?: boolean;
  /**
   * Specifies the number of unique characters required in the password.
   * @type {number}
   * @memberof PatchAuthenticatorsPasswordStrengthOptionsRequest
   */
  required_unique_characters_count?: number;
}
