/**
 *
 * @export
 * @enum {string}
 */

export const RefreshTokenExpirationTypes = {
  /**
   * When refreshing the token, the lifetime of the refresh token will be renewed (by the amount specified in &quot;Sliding Refresh Token Lifetime&quot; parameter). The lifetime will not exceed the time specified in the &quot;Absolute Refresh Token Lifetime&quot; parameter
   */
  Sliding: 'sliding',
  /**
   * The refresh token will expire on a fixed point in time (specified by the &quot;Absolute Refresh Token Lifetime&quot; parameter)
   */
  Absolute: 'absolute',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RefreshTokenExpirationTypes =
  (typeof RefreshTokenExpirationTypes)[keyof typeof RefreshTokenExpirationTypes];
