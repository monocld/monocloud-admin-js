/**
 *
 * @export
 * @enum {string}
 */

export const ThemeNames = {
  /**
   *
   */
  Default: 'default',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ThemeNames = (typeof ThemeNames)[keyof typeof ThemeNames];
