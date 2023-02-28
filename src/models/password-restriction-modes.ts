/**
 *
 * @export
 * @enum {string}
 */

export const PasswordRestrictionModes = {
  /**
   *
   */
  Off: 'off',
  /**
   *
   */
  Date: 'date',
  /**
   *
   */
  Count: 'count',
  /**
   *
   */
  DateAndCount: 'date_and_count',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type PasswordRestrictionModes =
  (typeof PasswordRestrictionModes)[keyof typeof PasswordRestrictionModes];
