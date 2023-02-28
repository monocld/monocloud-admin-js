/**
 *
 * @export
 * @enum {string}
 */

export const GrantTypes = {
  /**
   *
   */
  Implicit: 'implicit',
  /**
   *
   */
  Hybrid: 'hybrid',
  /**
   *
   */
  AuthorizationCode: 'authorization_code',
  /**
   *
   */
  ClientCredentials: 'client_credentials',
  /**
   *
   */
  Password: 'password',
  /**
   *
   */
  DeviceCode: 'device_code',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type GrantTypes = (typeof GrantTypes)[keyof typeof GrantTypes];
