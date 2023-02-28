import { PasswordRestrictionModes } from './password-restriction-modes';

/**
 * The Patch Authentication Method Password Reuse Options Request class
 * @export
 * @interface PatchAuthenticationMethodPasswordReuseOptionsRequest
 */
export interface PatchAuthenticationMethodPasswordReuseOptionsRequest {
  /**
   * Specifies if there should be any restriction for password reuse.
   * @type {PasswordRestrictionModes}
   * @memberof PatchAuthenticationMethodPasswordReuseOptionsRequest
   */
  restriction_mode?: PasswordRestrictionModes;
  /**
   * Specifies the time in minutes in which the password cannot be reused.
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordReuseOptionsRequest
   */
  restriction_period?: number;
  /**
   * Specifies the number of previous passwords which cannot be reused.
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordReuseOptionsRequest
   */
  restriction_count?: number;
}
