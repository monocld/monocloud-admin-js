import { AuthenticatorsAppleOptions } from './authenticators-apple-options';
import { AuthenticatorsDiscordOptions } from './authenticators-discord-options';
import { AuthenticatorsEmailOptions } from './authenticators-email-options';
import { AuthenticatorsFacebookOptions } from './authenticators-facebook-options';
import { AuthenticatorsGitHubOptions } from './authenticators-git-hub-options';
import { AuthenticatorsGitLabOptions } from './authenticators-git-lab-options';
import { AuthenticatorsGoogleOptions } from './authenticators-google-options';
import { AuthenticatorsLinkedInOptions } from './authenticators-linked-in-options';
import { AuthenticatorsMicrosoftOptions } from './authenticators-microsoft-options';
import { AuthenticatorsPasskeyOptions } from './authenticators-passkey-options';
import { AuthenticatorsPasswordOptions } from './authenticators-password-options';
import { AuthenticatorsPhoneOptions } from './authenticators-phone-options';
import { AuthenticatorsTwitterOptions } from './authenticators-twitter-options';
import { AuthenticatorsXeroOptions } from './authenticators-xero-options';
import { ExternalAuthenticators } from './external-authenticators';

/**
 * The Authenticators Options response class
 * @export
 * @interface AuthenticatorsOptions
 */
export interface AuthenticatorsOptions {
  /**
   * If enabled, External SigIn Methods are shown on top and the Primary SigIn method is shown on bottom.
   * @type {boolean}
   * @memberof AuthenticatorsOptions
   */
  external_sign_in_methods_first: boolean;
  /**
   * Order of the External SigIn methods buttons
   * @type {ExternalAuthenticators[]}
   * @memberof AuthenticatorsOptions
   */
  external_sign_in_methods_order: ExternalAuthenticators[];
  /**
   * Password Authenticator Settings
   * @type {AuthenticatorsPasswordOptions}
   * @memberof AuthenticatorsOptions
   */
  password: AuthenticatorsPasswordOptions;
  /**
   * Passkey Authenticator Settings
   * @type {AuthenticatorsPasskeyOptions}
   * @memberof AuthenticatorsOptions
   */
  passkey: AuthenticatorsPasskeyOptions;
  /**
   * Email Authenticator Settings
   * @type {AuthenticatorsEmailOptions}
   * @memberof AuthenticatorsOptions
   */
  email: AuthenticatorsEmailOptions;
  /**
   * Phone Authenticator Settings
   * @type {AuthenticatorsPhoneOptions}
   * @memberof AuthenticatorsOptions
   */
  phone: AuthenticatorsPhoneOptions;
  /**
   * Google Authenticator Settings
   * @type {AuthenticatorsGoogleOptions}
   * @memberof AuthenticatorsOptions
   */
  google?: AuthenticatorsGoogleOptions | null;
  /**
   * Apple Authenticator Settings
   * @type {AuthenticatorsAppleOptions}
   * @memberof AuthenticatorsOptions
   */
  apple?: AuthenticatorsAppleOptions | null;
  /**
   * Facebook Authenticator Settings
   * @type {AuthenticatorsFacebookOptions}
   * @memberof AuthenticatorsOptions
   */
  facebook?: AuthenticatorsFacebookOptions | null;
  /**
   * Microsoft Authenticator Settings
   * @type {AuthenticatorsMicrosoftOptions}
   * @memberof AuthenticatorsOptions
   */
  microsoft?: AuthenticatorsMicrosoftOptions | null;
  /**
   * GitHub Authenticator Settings
   * @type {AuthenticatorsGitHubOptions}
   * @memberof AuthenticatorsOptions
   */
  github?: AuthenticatorsGitHubOptions | null;
  /**
   * GitLab Authenticator Settings
   * @type {AuthenticatorsGitLabOptions}
   * @memberof AuthenticatorsOptions
   */
  gitlab?: AuthenticatorsGitLabOptions | null;
  /**
   * Discord Authenticator Settings
   * @type {AuthenticatorsDiscordOptions}
   * @memberof AuthenticatorsOptions
   */
  discord?: AuthenticatorsDiscordOptions | null;
  /**
   * Twitter Authenticator Settings
   * @type {AuthenticatorsTwitterOptions}
   * @memberof AuthenticatorsOptions
   */
  twitter?: AuthenticatorsTwitterOptions | null;
  /**
   * LinkedIn Authenticator Settings
   * @type {AuthenticatorsLinkedInOptions}
   * @memberof AuthenticatorsOptions
   */
  linkedin?: AuthenticatorsLinkedInOptions | null;
  /**
   * Xero Authenticator Settings
   * @type {AuthenticatorsXeroOptions}
   * @memberof AuthenticatorsOptions
   */
  xero?: AuthenticatorsXeroOptions | null;
}
