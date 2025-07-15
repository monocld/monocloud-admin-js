/**
 *
 * @export
 * @enum {string}
 */

export const TrustStoreStatus = {
  /**
   * Active
   */
  Active: 'active',
  /**
   * Disabled
   */
  Disabled: 'disabled',
  /**
   * Unavailable
   */
  Unavailable: 'unavailable',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TrustStoreStatus =
  (typeof TrustStoreStatus)[keyof typeof TrustStoreStatus];
