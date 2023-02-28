/**
 * The Authentication Method Password Strength response class
 * @export
 * @interface AuthenticationMethodPasswordStrengthOptions
 */
export interface AuthenticationMethodPasswordStrengthOptions {
  /**
   * Specifies the minimum character length of password
   * @type {number}
   * @memberof AuthenticationMethodPasswordStrengthOptions
   */
  minimum_length: number;
  /**
   * Specifies the whether a non alphanumeric character is required in the password.
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordStrengthOptions
   */
  require_non_alphanumeric_character: boolean;
  /**
   * Specifies the whether a digit is required in the password.
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordStrengthOptions
   */
  require_digit: boolean;
  /**
   * Specifies the whether a lowercase character is required in the password.
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordStrengthOptions
   */
  require_lowercase_character: boolean;
  /**
   * Specifies the whether a uppercase character is required in the password.
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordStrengthOptions
   */
  require_uppercase_character: boolean;
  /**
   * Specifies the number of unique characters required in the password.
   * @type {number}
   * @memberof AuthenticationMethodPasswordStrengthOptions
   */
  required_unique_characters_count: number;
}
