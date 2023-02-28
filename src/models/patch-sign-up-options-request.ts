/**
 * The Patch SignUp Options Request class
 * @export
 * @interface PatchSignUpOptionsRequest
 */
export interface PatchSignUpOptionsRequest {
  /**
   * Shows T&C and/or Privacy Policy Agreement on the Sign Up screen.  Make sure to add T&C and/or Privacy Policy links in the Project Settings.  T&C and/or Privacy Policy Agreement is not shown when user is created through External Identity Providers
   * @type {boolean}
   * @memberof PatchSignUpOptionsRequest
   */
  show_terms_and_privacy_policy?: boolean;
  /**
   * Requires user interaction to agree with T&C and/or Privacy Policy
   * @type {boolean}
   * @memberof PatchSignUpOptionsRequest
   */
  require_explicit_user_agreement?: boolean;
  /**
   * Send an email to user at the time of signup.
   * @type {boolean}
   * @memberof PatchSignUpOptionsRequest
   */
  enable_welcome_email?: boolean;
}
