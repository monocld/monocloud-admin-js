import { PasswordRestrictionModes } from './password-restriction-modes';

/**
 * The Authentication Method Password Reuse response class
 * @export
 * @interface AuthenticationMethodPasswordReuseOptions
 */
export interface AuthenticationMethodPasswordReuseOptions {
  /**
   * Specifies if there should be any restriction for password reuse.
   * @type {PasswordRestrictionModes}
   * @memberof AuthenticationMethodPasswordReuseOptions
   */
  restriction_mode: PasswordRestrictionModes;
  /**
   * Specifies the time in minutes in which the password cannot be reused.
   * @type {number}
   * @memberof AuthenticationMethodPasswordReuseOptions
   */
  restriction_period: number;
  /**
   * Specifies the number of previous passwords which cannot be reused.
   * @type {number}
   * @memberof AuthenticationMethodPasswordReuseOptions
   */
  restriction_count: number;
}
