/**
 *
 * @export
 * @enum {string}
 */

export const Languages = {
  /**
   *
   */
  EnglishUs: 'english_us',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Languages = (typeof Languages)[keyof typeof Languages];
