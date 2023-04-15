/**
 *
 * @export
 * @enum {string}
 */

export const VerificationTypes = {
  /**
   *
   */
  Code: 'code',
  /**
   *
   */
  Link: 'link',
  /**
   *
   */
  Both: 'both',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type VerificationTypes =
  (typeof VerificationTypes)[keyof typeof VerificationTypes];
