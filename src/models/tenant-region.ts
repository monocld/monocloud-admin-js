/**
 *
 * @export
 * @enum {string}
 */

export const TenantRegion = {
  /**
   *
   */
  As: 'as',
  /**
   *
   */
  Eu: 'eu',
  /**
   *
   */
  Us: 'us',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TenantRegion = (typeof TenantRegion)[keyof typeof TenantRegion];
