/**
 *
 * @export
 * @enum {string}
 */

export const ExternalAuthenticators = {
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
export type ExternalAuthenticators =
  (typeof ExternalAuthenticators)[keyof typeof ExternalAuthenticators];
