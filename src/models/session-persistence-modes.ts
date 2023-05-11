/**
 *
 * @export
 * @enum {string}
 */

export const SessionPersistenceModes = {
  /**
   * The session will be persisted in accordance with the Expiration Type.
   */
  Persistent: 'persistent',
  /**
   * The session will expire when the browser is closed.
   */
  NonPersistent: 'non_persistent',
  /**
   * if the user chooses to remember the session will be persisted in accordance with the Expiration Type.
   */
  UserSelected: 'user_selected',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SessionPersistenceModes =
  (typeof SessionPersistenceModes)[keyof typeof SessionPersistenceModes];
