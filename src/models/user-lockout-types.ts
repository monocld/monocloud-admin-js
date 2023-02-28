/**
 *
 * @export
 * @enum {string}
 */

export const UserLockoutTypes = {
  /**
   *
   */
  Ip: 'ip',
  /**
   *
   */
  UserAccount: 'user_account',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserLockoutTypes =
  (typeof UserLockoutTypes)[keyof typeof UserLockoutTypes];
