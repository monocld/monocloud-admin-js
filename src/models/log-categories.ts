/**
 * Categories for events
 * @export
 * @enum {string}
 */

export const LogCategories = {
  /**
   * Authentication related events
   */
  Authentication: 'authentication',
  /**
   * Token related events
   */
  Tokens: 'tokens',
  /**
   * Consent related events
   */
  Consent: 'consent',
  /**
   * Blocks related events
   */
  Blocks: 'blocks',
  /**
   * User related events
   */
  Users: 'users',
  /**
   * User Sessions related events
   */
  UserSessions: 'user_sessions',
  /**
   * Notifications related events
   */
  Notifications: 'notifications',
  /**
   * Resources related events
   */
  Resources: 'resources',
  /**
   * Trust Store related events
   */
  TrustStore: 'trust_store',
  /**
   * Clients related events
   */
  Clients: 'clients',
  /**
   * Groups related events
   */
  Groups: 'groups',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type LogCategories = (typeof LogCategories)[keyof typeof LogCategories];
