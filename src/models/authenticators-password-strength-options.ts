/**
 * The Password Authenticator Strength Options response class
 * @export
 * @interface AuthenticatorsPasswordStrengthOptions
 */
export interface AuthenticatorsPasswordStrengthOptions {
  /**
   * Specifies the minimum character length of password
   * @type {number}
   * @memberof AuthenticatorsPasswordStrengthOptions
   */
  minimum_length: number;
  /**
   * Specifies the whether a non alphanumeric character is required in the password.
   * @type {boolean}
   * @memberof AuthenticatorsPasswordStrengthOptions
   */
  require_non_alphanumeric_character: boolean;
  /**
   * Specifies the whether a digit is required in the password.
   * @type {boolean}
   * @memberof AuthenticatorsPasswordStrengthOptions
   */
  require_digit: boolean;
  /**
   * Specifies the whether a lowercase character is required in the password.
   * @type {boolean}
   * @memberof AuthenticatorsPasswordStrengthOptions
   */
  require_lowercase_character: boolean;
  /**
   * Specifies the whether a uppercase character is required in the password.
   * @type {boolean}
   * @memberof AuthenticatorsPasswordStrengthOptions
   */
  require_uppercase_character: boolean;
  /**
   * Specifies the number of unique characters required in the password.
   * @type {number}
   * @memberof AuthenticatorsPasswordStrengthOptions
   */
  required_unique_characters_count: number;
}
