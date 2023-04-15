import { VerificationTypes } from './verification-types';

/**
 * The Authentication Method Password Recovery Email response class
 * @export
 * @interface AuthenticationMethodPasswordRecoveryEmailOptions
 */
export interface AuthenticationMethodPasswordRecoveryEmailOptions {
  /**
   * Enable Password recovery through Email.
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordRecoveryEmailOptions
   */
  enabled: boolean;
  /**
   * Verification type that should be used for email password reset
   * @type {VerificationTypes}
   * @memberof AuthenticationMethodPasswordRecoveryEmailOptions
   */
  verification_type: VerificationTypes;
  /**
   * Allow password reset flow to resume in a different browser
   * @type {boolean}
   * @memberof AuthenticationMethodPasswordRecoveryEmailOptions
   */
  allow_cross_browser: boolean;
  /**
   * Specifies the expiration period of the email (in seconds)
   * @type {number}
   * @memberof AuthenticationMethodPasswordRecoveryEmailOptions
   */
  expiry: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof AuthenticationMethodPasswordRecoveryEmailOptions
   */
  code_length: number;
}
