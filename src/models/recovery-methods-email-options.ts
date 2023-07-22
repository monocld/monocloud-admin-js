import { VerificationTypes } from './verification-types';

/**
 * The Email Recovery Method Options response class
 * @export
 * @interface RecoveryMethodsEmailOptions
 */
export interface RecoveryMethodsEmailOptions {
  /**
   * Enable Password recovery through Email.
   * @type {boolean}
   * @memberof RecoveryMethodsEmailOptions
   */
  enabled: boolean;
  /**
   * Verification type that should be used for email password reset
   * @type {VerificationTypes}
   * @memberof RecoveryMethodsEmailOptions
   */
  verification_type: VerificationTypes;
  /**
   * Allow password reset flow to resume in a different browser
   * @type {boolean}
   * @memberof RecoveryMethodsEmailOptions
   */
  allow_cross_browser: boolean;
  /**
   * Specifies the expiration period of the email (in seconds)
   * @type {number}
   * @memberof RecoveryMethodsEmailOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof RecoveryMethodsEmailOptions
   */
  code_length: number;
}
