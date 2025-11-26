import { SignUpCustomFieldOptions } from './sign-up-custom-field-options';
import { SignUpGenericRestrictionsOptions } from './sign-up-generic-restrictions-options';

/**
 * The SignUp Options response class
 * @export
 * @interface SignUpOptions
 */
export interface SignUpOptions {
  /**
   * Registration Custom Fields Options
   * @type {SignUpCustomFieldOptions[]}
   * @memberof SignUpOptions
   */
  custom_fields: SignUpCustomFieldOptions[];
  /**
   * Shows T&C and/or Privacy Policy Agreement on the Sign Up screen.  Make sure to add T&C and/or Privacy Policy links in the Project Settings.  T&C and/or Privacy Policy Agreement is not shown when user is created through External Identity Providers
   * @type {boolean}
   * @memberof SignUpOptions
   */
  show_terms_and_privacy_policy: boolean;
  /**
   * Requires user interaction to agree with T&C and/or Privacy Policy
   * @type {boolean}
   * @memberof SignUpOptions
   */
  require_explicit_user_agreement: boolean;
  /**
   * Privacy Url
   * @type {string}
   * @memberof SignUpOptions
   */
  privacy_url?: string | null;
  /**
   * Terms Url
   * @type {string}
   * @memberof SignUpOptions
   */
  terms_url?: string | null;
  /**
   * The whitelist Restriction Options.
   * @type {SignUpGenericRestrictionsOptions}
   * @memberof SignUpOptions
   */
  whitelist: SignUpGenericRestrictionsOptions;
  /**
   * The blacklist Restriction Options.
   * @type {SignUpGenericRestrictionsOptions}
   * @memberof SignUpOptions
   */
  blacklist: SignUpGenericRestrictionsOptions;
}
