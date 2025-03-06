import { ExpirationTypes } from './expiration-types';
import { SessionPersistenceModes } from './session-persistence-modes';

/**
 * The Session Options response class
 * @export
 * @interface SessionOptions
 */
export interface SessionOptions {
  /**
   * Persistence Mode of the session.
   * @type {SessionPersistenceModes}
   * @memberof SessionOptions
   */
  persistence_mode: SessionPersistenceModes;
  /**
   * Expiration Type
   * @type {ExpirationTypes}
   * @memberof SessionOptions
   */
  expiration_type: ExpirationTypes;
  /**
   * Specifies the duration in minutes after which the user session will expire in accordance with the expiration type.
   * @type {number}
   * @memberof SessionOptions
   */
  sliding_session_lifetime: number;
  /**
   * Specifies the duration in minutes after which the user session will expire regardless of the expiration type.
   * @type {number}
   * @memberof SessionOptions
   */
  absolute_session_lifetime: number;
}
