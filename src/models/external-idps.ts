/**
 *
 * @export
 * @enum {string}
 */

export const ExternalIDPs = {
  /**
   *
   */
  Google: 'google',
  /**
   *
   */
  Apple: 'apple',
  /**
   *
   */
  Facebook: 'facebook',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ExternalIDPs = (typeof ExternalIDPs)[keyof typeof ExternalIDPs];
