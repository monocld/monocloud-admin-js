import { ExpirationTypes } from './expiration-types';
import { SessionPersistenceModes } from './session-persistence-modes';

/**
 * The Patch General Session Authentication Options Request class
 * @export
 * @interface PatchAuthenticationGeneralSessionOptionsRequest
 */
export interface PatchAuthenticationGeneralSessionOptionsRequest {
  /**
   * Persistence Mode of the session.
   * @type {SessionPersistenceModes}
   * @memberof PatchAuthenticationGeneralSessionOptionsRequest
   */
  persistence_mode?: SessionPersistenceModes;
  /**
   * Expiration Type
   * @type {ExpirationTypes}
   * @memberof PatchAuthenticationGeneralSessionOptionsRequest
   */
  expiration_type?: ExpirationTypes;
  /**
   * Specifies the duration in minutes after which the user session will expire in accordance with the expiration type.
   * @type {number}
   * @memberof PatchAuthenticationGeneralSessionOptionsRequest
   */
  remember_me_duration?: number;
  /**
   * Specifies the duration in minutes after which the user session will expire regardless of the expiration type.
   * @type {number}
   * @memberof PatchAuthenticationGeneralSessionOptionsRequest
   */
  logout_after?: number;
}
