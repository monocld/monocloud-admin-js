import { VerificationTypes } from './verification-types';

/**
 * The Patch Email Recovery Method Options Request class
 * @export
 * @interface PatchRecoveryMethodsEmailOptionsRequest
 */
export interface PatchRecoveryMethodsEmailOptionsRequest {
  /**
   * Enable Password recovery through Email.
   * @type {boolean}
   * @memberof PatchRecoveryMethodsEmailOptionsRequest
   */
  enabled?: boolean;
  /**
   * Verification type that should be used for email password reset
   * @type {VerificationTypes}
   * @memberof PatchRecoveryMethodsEmailOptionsRequest
   */
  verification_type?: VerificationTypes;
  /**
   * Allow password reset flow to resume in a different browser
   * @type {boolean}
   * @memberof PatchRecoveryMethodsEmailOptionsRequest
   */
  allow_cross_browser?: boolean;
  /**
   * Specifies the expiration period of the email (in seconds)
   * @type {number}
   * @memberof PatchRecoveryMethodsEmailOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchRecoveryMethodsEmailOptionsRequest
   */
  code_length?: number;
}
