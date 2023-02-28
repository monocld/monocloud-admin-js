/**
 * The Patch Authentication Method Password Strength Options Request class
 * @export
 * @interface PatchAuthenticationMethodPasswordStrengthOptionsRequest
 */
export interface PatchAuthenticationMethodPasswordStrengthOptionsRequest {
  /**
   * Specifies the minimum character length of password
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordStrengthOptionsRequest
   */
  minimum_length?: number;
  /**
   * Specifies the whether a non alphanumeric character is required in the password.
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordStrengthOptionsRequest
   */
  require_non_alphanumeric_character?: boolean;
  /**
   * Specifies the whether a digit is required in the password.
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordStrengthOptionsRequest
   */
  require_digit?: boolean;
  /**
   * Specifies the whether a lowercase character is required in the password.
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordStrengthOptionsRequest
   */
  require_lowercase_character?: boolean;
  /**
   * Specifies the whether a uppercase character is required in the password.
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordStrengthOptionsRequest
   */
  require_uppercase_character?: boolean;
  /**
   * Specifies the number of unique characters required in the password.
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordStrengthOptionsRequest
   */
  required_unique_characters_count?: number;
}
