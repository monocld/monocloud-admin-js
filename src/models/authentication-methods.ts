/**
 *
 * @export
 * @enum {string}
 */

export const AuthenticationMethods = {
  /**
   *
   */
  Password: 'password',
  /**
   *
   */
  Email: 'email',
  /**
   *
   */
  Phone: 'phone',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AuthenticationMethods =
  (typeof AuthenticationMethods)[keyof typeof AuthenticationMethods];
