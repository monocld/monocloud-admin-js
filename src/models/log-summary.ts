import { LogEventCategories } from './log-event-categories';
import { LogEventIds } from './log-event-ids';
import { LogEventTypes } from './log-event-types';

/**
 * The Log Summary response class
 * @export
 * @interface LogSummary
 */
export interface LogSummary {
  /**
   * Unique identifier of the log
   * @type {string}
   * @memberof LogSummary
   */
  id: string;
  /**
   * Log Category
   * @type {LogEventCategories}
   * @memberof LogSummary
   */
  category: LogEventCategories;
  /**
   * Log Name.
   * @type {string}
   * @memberof LogSummary
   */
  name: string;
  /**
   * Log Type.
   * @type {LogEventTypes}
   * @memberof LogSummary
   */
  event_type: LogEventTypes;
  /**
   * Log event Id.
   * @type {LogEventIds}
   * @memberof LogSummary
   */
  event_id: LogEventIds;
  /**
   * The Activity Id.
   * @type {string}
   * @memberof LogSummary
   */
  activity_id?: string | null;
  /**
   * Specifies the event time (in Epoch).
   * @type {number}
   * @memberof LogSummary
   */
  time_stamp: number;
  /**
   * Specifies if the log was triggered by a user interactive process.
   * @type {boolean}
   * @memberof LogSummary
   */
  interactive: boolean;
  /**
   * The client Id.
   * @type {string}
   * @memberof LogSummary
   */
  client_id?: string | null;
  /**
   * The Client Name.
   * @type {string}
   * @memberof LogSummary
   */
  client_name?: string | null;
}
