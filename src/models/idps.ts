/**
 *
 * @export
 * @enum {string}
 */

export const IDPs = {
  /**
   *
   */
  MonoCloud: 'mono_cloud',
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
export type IDPs = (typeof IDPs)[keyof typeof IDPs];
