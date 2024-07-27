import { ExternalAuthenticators } from './external-authenticators';
import { PatchAuthenticatorsAppleOptionsRequest } from './patch-authenticators-apple-options-request';
import { PatchAuthenticatorsDiscordOptionsRequest } from './patch-authenticators-discord-options-request';
import { PatchAuthenticatorsEmailOptionsRequest } from './patch-authenticators-email-options-request';
import { PatchAuthenticatorsFacebookOptionsRequest } from './patch-authenticators-facebook-options-request';
import { PatchAuthenticatorsGitHubOptionsRequest } from './patch-authenticators-git-hub-options-request';
import { PatchAuthenticatorsGitLabOptionsRequest } from './patch-authenticators-git-lab-options-request';
import { PatchAuthenticatorsGoogleOptionsRequest } from './patch-authenticators-google-options-request';
import { PatchAuthenticatorsLinkedInOptionsRequest } from './patch-authenticators-linked-in-options-request';
import { PatchAuthenticatorsMicrosoftOptionsRequest } from './patch-authenticators-microsoft-options-request';
import { PatchAuthenticatorsPasskeyOptionsRequest } from './patch-authenticators-passkey-options-request';
import { PatchAuthenticatorsPasswordOptionsRequest } from './patch-authenticators-password-options-request';
import { PatchAuthenticatorsPhoneOptionsRequest } from './patch-authenticators-phone-options-request';
import { PatchAuthenticatorsTwitterOptionsRequest } from './patch-authenticators-twitter-options-request';
import { PatchAuthenticatorsXeroOptionsRequest } from './patch-authenticators-xero-options-request';

/**
 * The Patch Authenticators Options Request class
 * @export
 * @interface PatchAuthenticatorsOptionsRequest
 */
export interface PatchAuthenticatorsOptionsRequest {
  /**
   * If enabled, External SigIn Methods are shown on top and the Primary SigIn method is shown on bottom.
   * @type {boolean}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  external_sign_in_methods_first?: boolean;
  /**
   * Order of the External SigIn methods buttons
   * @type {ExternalAuthenticators[]}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  external_sign_in_methods_order?: ExternalAuthenticators[];
  /**
   * Password Authenticator Settings
   * @type {PatchAuthenticatorsPasswordOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  password?: PatchAuthenticatorsPasswordOptionsRequest;
  /**
   * Passkey Authenticator Settings
   * @type {PatchAuthenticatorsPasskeyOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  passkey?: PatchAuthenticatorsPasskeyOptionsRequest;
  /**
   * Email Authenticator Settings
   * @type {PatchAuthenticatorsEmailOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  email?: PatchAuthenticatorsEmailOptionsRequest;
  /**
   * Phone Authenticator Settings
   * @type {PatchAuthenticatorsPhoneOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  phone?: PatchAuthenticatorsPhoneOptionsRequest;
  /**
   * Google Authenticator Settings
   * @type {PatchAuthenticatorsGoogleOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  google?: PatchAuthenticatorsGoogleOptionsRequest | null;
  /**
   * Apple Authenticator Settings
   * @type {PatchAuthenticatorsAppleOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  apple?: PatchAuthenticatorsAppleOptionsRequest | null;
  /**
   * Facebook Authenticator Settings
   * @type {PatchAuthenticatorsFacebookOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  facebook?: PatchAuthenticatorsFacebookOptionsRequest | null;
  /**
   * Microsoft Authenticator Settings
   * @type {PatchAuthenticatorsMicrosoftOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  microsoft?: PatchAuthenticatorsMicrosoftOptionsRequest | null;
  /**
   * GitHub Authenticator Settings
   * @type {PatchAuthenticatorsGitHubOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  github?: PatchAuthenticatorsGitHubOptionsRequest | null;
  /**
   * GitLab Authenticator Settings
   * @type {PatchAuthenticatorsGitLabOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  gitlab?: PatchAuthenticatorsGitLabOptionsRequest | null;
  /**
   * Discord Authenticator Settings
   * @type {PatchAuthenticatorsDiscordOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  discord?: PatchAuthenticatorsDiscordOptionsRequest | null;
  /**
   * Twitter Authenticator Settings
   * @type {PatchAuthenticatorsTwitterOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  twitter?: PatchAuthenticatorsTwitterOptionsRequest | null;
  /**
   * LinkedIn Authenticator Settings
   * @type {PatchAuthenticatorsLinkedInOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  linkedin?: PatchAuthenticatorsLinkedInOptionsRequest | null;
  /**
   * Xero Authenticator Settings
   * @type {PatchAuthenticatorsXeroOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  xero?: PatchAuthenticatorsXeroOptionsRequest | null;
}
