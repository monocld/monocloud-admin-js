/**
 *
 * @export
 * @enum {string}
 */

export const RememberConsentTypes = {
  /**
   *
   */
  Never: 'never',
  /**
   *
   */
  Always: 'always',
  /**
   *
   */
  UserSelected: 'user_selected',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RememberConsentTypes =
  (typeof RememberConsentTypes)[keyof typeof RememberConsentTypes];
