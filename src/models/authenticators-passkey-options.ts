/**
 * The Passkey Authenticator Options response class
 * @export
 * @interface AuthenticatorsPasskeyOptions
 */
export interface AuthenticatorsPasskeyOptions {
  /**
   * Enable Passkey Sign-in
   * @type {boolean}
   * @memberof AuthenticatorsPasskeyOptions
   */
  enable_sign_in: boolean;
  /**
   * Enable Passkey Sign-up
   * @type {boolean}
   * @memberof AuthenticatorsPasskeyOptions
   */
  enable_sign_up: boolean;
  /**
   * Allow users to autofill passkeys using the username field on the login page
   * @type {boolean}
   * @memberof AuthenticatorsPasskeyOptions
   */
  allow_passkey_auto_complete: boolean;
  /**
   * Prompt users for adding a passkey if the user does not have one
   * @type {boolean}
   * @memberof AuthenticatorsPasskeyOptions
   */
  passkey_enrollment: boolean;
  /**
   * Prompt for adding a passkey on the current device when user authenticated with an external passkey
   * @type {boolean}
   * @memberof AuthenticatorsPasskeyOptions
   */
  local_passkey_enrollment: boolean;
}
