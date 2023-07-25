import { PasswordRestrictionModes } from './password-restriction-modes';

/**
 * The Patch Password Authenticator Reuse Options Request class
 * @export
 * @interface PatchAuthenticatorsPasswordReuseOptionsRequest
 */
export interface PatchAuthenticatorsPasswordReuseOptionsRequest {
  /**
   * Specifies if there should be any restriction for password reuse.
   * @type {PasswordRestrictionModes}
   * @memberof PatchAuthenticatorsPasswordReuseOptionsRequest
   */
  restriction_mode?: PasswordRestrictionModes;
  /**
   * Specifies the time in minutes in which the password cannot be reused.
   * @type {number}
   * @memberof PatchAuthenticatorsPasswordReuseOptionsRequest
   */
  restriction_period?: number;
  /**
   * Specifies the number of previous passwords which cannot be reused.
   * @type {number}
   * @memberof PatchAuthenticatorsPasswordReuseOptionsRequest
   */
  restriction_count?: number;
}
