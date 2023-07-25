import { PasswordRestrictionModes } from './password-restriction-modes';

/**
 * The Password Authenticator Reuse Options response class
 * @export
 * @interface AuthenticatorsPasswordReuseOptions
 */
export interface AuthenticatorsPasswordReuseOptions {
  /**
   * Specifies if there should be any restriction for password reuse.
   * @type {PasswordRestrictionModes}
   * @memberof AuthenticatorsPasswordReuseOptions
   */
  restriction_mode: PasswordRestrictionModes;
  /**
   * Specifies the time in minutes in which the password cannot be reused.
   * @type {number}
   * @memberof AuthenticatorsPasswordReuseOptions
   */
  restriction_period: number;
  /**
   * Specifies the number of previous passwords which cannot be reused.
   * @type {number}
   * @memberof AuthenticatorsPasswordReuseOptions
   */
  restriction_count: number;
}
