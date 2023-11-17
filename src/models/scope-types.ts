/**
 *
 * @export
 * @enum {string}
 */

export const ScopeTypes = {
  /**
   *
   */
  Api: 'api',
  /**
   *
   */
  Identity: 'identity',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ScopeTypes = (typeof ScopeTypes)[keyof typeof ScopeTypes];
