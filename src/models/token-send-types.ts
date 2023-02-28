/**
 *
 * @export
 * @enum {string}
 */

export const TokenSendTypes = {
  /**
   *
   */
  Link: 'link',
  /**
   *
   */
  Code: 'code',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TokenSendTypes =
  (typeof TokenSendTypes)[keyof typeof TokenSendTypes];
