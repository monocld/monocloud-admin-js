/**
 *
 * @export
 * @enum {string}
 */

export const LogEventTypes = {
  /**
   *
   */
  Success: 'success',
  /**
   *
   */
  Failure: 'failure',
  /**
   *
   */
  Information: 'information',
  /**
   *
   */
  Error: 'error',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type LogEventTypes = (typeof LogEventTypes)[keyof typeof LogEventTypes];
