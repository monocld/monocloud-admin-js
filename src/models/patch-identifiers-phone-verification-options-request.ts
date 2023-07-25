/**
 * The Patch Phone Identifier Verification Options Request class
 * @export
 * @interface PatchIdentifiersPhoneVerificationOptionsRequest
 */
export interface PatchIdentifiersPhoneVerificationOptionsRequest {
  /**
   * Specifies whether the phone should be verified at registration.
   * @type {boolean}
   * @memberof PatchIdentifiersPhoneVerificationOptionsRequest
   */
  verify_at_sign_up?: boolean;
  /**
   * Specifies the expiration period of the code (in seconds)
   * @type {number}
   * @memberof PatchIdentifiersPhoneVerificationOptionsRequest
   */
  expiry?: number;
  /**
   * Specifies the length of the code
   * @type {number}
   * @memberof PatchIdentifiersPhoneVerificationOptionsRequest
   */
  code_length?: number;
}
