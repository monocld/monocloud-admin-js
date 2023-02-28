/**
 *
 * @export
 * @enum {string}
 */

export const AccessTokenTypes = {
  /**
   * Jwt token
   */
  Jwt: 'jwt',
  /**
   * Reference token
   */
  Reference: 'reference',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AccessTokenTypes =
  (typeof AccessTokenTypes)[keyof typeof AccessTokenTypes];
