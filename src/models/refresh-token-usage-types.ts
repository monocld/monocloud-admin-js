/**
 *
 * @export
 * @enum {string}
 */

export const RefreshTokenUsageTypes = {
  /**
   * The refresh token handle will stay the same when refreshing tokens
   */
  Reuse: 'reuse',
  /**
   * The refresh token handle will be updated when refreshing tokens
   */
  OneTimeOnly: 'one_time_only',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RefreshTokenUsageTypes =
  (typeof RefreshTokenUsageTypes)[keyof typeof RefreshTokenUsageTypes];
