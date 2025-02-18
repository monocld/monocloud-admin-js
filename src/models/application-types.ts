/**
 *
 * @export
 * @enum {string}
 */

export const ApplicationTypes = {
  /**
   *
   */
  Custom: 'custom',
  /**
   *
   */
  Spa: 'spa',
  /**
   *
   */
  WebApp: 'web_app',
  /**
   *
   */
  Native: 'native',
  /**
   *
   */
  M2m: 'm2m',
  /**
   *
   */
  Device: 'device',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ApplicationTypes =
  (typeof ApplicationTypes)[keyof typeof ApplicationTypes];
