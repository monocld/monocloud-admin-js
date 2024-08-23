/**
 *
 * @export
 * @enum {string}
 */

export const LogEventCategories = {
  /**
   *
   */
  Authentication: 'authentication',
  /**
   *
   */
  Token: 'token',
  /**
   *
   */
  Grants: 'grants',
  /**
   *
   */
  Error: 'error',
  /**
   *
   */
  Device: 'device',
  /**
   *
   */
  Notifications: 'notifications',
  /**
   *
   */
  Audit: 'audit',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type LogEventCategories =
  (typeof LogEventCategories)[keyof typeof LogEventCategories];
