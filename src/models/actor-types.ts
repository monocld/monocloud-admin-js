/**
 * Indicates the type of actor who performed an action.
 * @export
 * @enum {string}
 */

export const ActorTypes = {
  /**
   * Unknown
   */
  Unknown: 'unknown',
  /**
   * The system
   */
  System: 'system',
  /**
   * Api Key
   */
  ApiKey: 'api_key',
  /**
   * Private Api Key
   */
  PrivateApiKey: 'private_api_key',
  /**
   * Public Api Key
   */
  PublicApiKey: 'public_api_key',
  /**
   * A user
   */
  User: 'user',
  /**
   * An admin user
   */
  AdminUser: 'admin_user',
  /**
   * Api
   */
  Api: 'api',
  /**
   * Client
   */
  Client: 'client',
  /**
   * Certificate
   */
  Certificate: 'certificate',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ActorTypes = (typeof ActorTypes)[keyof typeof ActorTypes];
