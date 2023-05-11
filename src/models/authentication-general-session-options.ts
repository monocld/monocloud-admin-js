import { ExpirationTypes } from './expiration-types';
import { SessionPersistenceModes } from './session-persistence-modes';

/**
 * The Authentication General Session response class
 * @export
 * @interface AuthenticationGeneralSessionOptions
 */
export interface AuthenticationGeneralSessionOptions {
  /**
   * Persistence Mode of the session.
   * @type {SessionPersistenceModes}
   * @memberof AuthenticationGeneralSessionOptions
   */
  persistence_mode: SessionPersistenceModes;
  /**
   * Expiration Type
   * @type {ExpirationTypes}
   * @memberof AuthenticationGeneralSessionOptions
   */
  expiration_type: ExpirationTypes;
  /**
   * Specifies the duration in minutes after which the user session will expire in accordance with the expiration type.
   * @type {number}
   * @memberof AuthenticationGeneralSessionOptions
   */
  remember_me_duration: number;
  /**
   * Specifies the duration in minutes after which the user session will expire regardless of the expiration type.
   * @type {number}
   * @memberof AuthenticationGeneralSessionOptions
   */
  logout_after: number;
}
