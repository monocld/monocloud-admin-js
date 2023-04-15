import { VerificationTypes } from './verification-types';

/**
 * The Patch authentication method password recovery email options request class
 * @export
 * @interface PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
 */
export interface PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest {
  /**
   * Enable Password recovery through Email.
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
   */
  enabled?: boolean;
  /**
   * Verification type that should be used for email password reset
   * @type {VerificationTypes}
   * @memberof PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
   */
  verification_type?: VerificationTypes;
  /**
   * Allow password reset flow to resume in a different browser
   * @type {boolean}
   * @memberof PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
   */
  allow_cross_browser?: boolean;
  /**
   * Specifies the expiration period of the email (in seconds)
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchAuthenticationMethodPasswordRecoveryEmailOptionsRequest
   */
  code_length?: number;
}
