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
   * Prompt the user for adding a passkey if the user does not have one
   * @type {boolean}
   * @memberof AuthenticatorsPasskeyOptions
   */
  prompt_enrollment: boolean;
  /**
   * Prompt the user for adding a passkey if the user does not have a passkey for the device
   * @type {boolean}
   * @memberof AuthenticatorsPasskeyOptions
   */
  prompt_device_enrollment: boolean;
  /**
   * Allow users to autofill passkeys using the identifier field on the sign-in page
   * @type {boolean}
   * @memberof AuthenticatorsPasskeyOptions
   */
  enable_auto_complete: boolean;
  /**
   * Specifies whether the sign-in with passkey button will be shown on the sign-in page
   * @type {boolean}
   * @memberof AuthenticatorsPasskeyOptions
   */
  show_passkey_button: boolean;
}
