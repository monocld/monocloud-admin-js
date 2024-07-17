/**
 * The Patch Passkey Authenticator Options Request class
 * @export
 * @interface PatchAuthenticatorsPasskeyOptionsRequest
 */
export interface PatchAuthenticatorsPasskeyOptionsRequest {
  /**
   * Enable Passkey Sign-in
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasskeyOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Enable Passkey Sign-up
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasskeyOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Allow users to autofill passkeys using the username field on the login page
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasskeyOptionsRequest
   */
  allow_passkey_auto_complete?: boolean;
  /**
   * Prompt users for adding a passkey if the user does not have one
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasskeyOptionsRequest
   */
  passkey_enrollment?: boolean;
  /**
   * Prompt for adding a passkey on the current device when user authenticated with an external passkey
   * @type {boolean}
   * @memberof PatchAuthenticatorsPasskeyOptionsRequest
   */
  local_passkey_enrollment?: boolean;
}
