/**
 * Indicates if the event is a success or fail event.
 * @export
 * @enum {string}
 */

export const EventTypes = {
  /**
   * Success event
   */
  Success: 'success',
  /**
   * Failure event
   */
  Failure: 'failure',
  /**
   * Information event
   */
  Information: 'information',
  /**
   * Error event
   */
  Error: 'error',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type EventTypes = (typeof EventTypes)[keyof typeof EventTypes];
