import { ExpirationTypes } from './expiration-types';
import { SessionPersistenceModes } from './session-persistence-modes';

/**
 * The Patch Session Options Request class
 * @export
 * @interface PatchSessionOptionsRequest
 */
export interface PatchSessionOptionsRequest {
  /**
   * Persistence Mode of the session.
   * @type {SessionPersistenceModes}
   * @memberof PatchSessionOptionsRequest
   */
  persistence_mode?: SessionPersistenceModes;
  /**
   * Expiration Type
   * @type {ExpirationTypes}
   * @memberof PatchSessionOptionsRequest
   */
  expiration_type?: ExpirationTypes;
  /**
   * Specifies the duration in minutes after which the user session will expire in accordance with the expiration type.
   * @type {number}
   * @memberof PatchSessionOptionsRequest
   */
  sliding_session_lifetime?: number;
  /**
   * Specifies the duration in minutes after which the user session will expire regardless of the expiration type.
   * @type {number}
   * @memberof PatchSessionOptionsRequest
   */
  absolute_session_lifetime?: number;
}
