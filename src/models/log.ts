import { LogEventCategories } from './log-event-categories';
import { LogEventIds } from './log-event-ids';
import { LogEventTypes } from './log-event-types';
import { LogRequestMetadata } from './log-request-metadata';

/**
 * The Log response class.
 * @export
 * @interface Log
 */
export interface Log {
  [key: string]: any;

  /**
   * Unique identifier of the log
   * @type {string}
   * @memberof Log
   */
  id: string;
  /**
   * Log Category
   * @type {LogEventCategories}
   * @memberof Log
   */
  category: LogEventCategories;
  /**
   * Log Name.
   * @type {string}
   * @memberof Log
   */
  name: string;
  /**
   * Log Type.
   * @type {LogEventTypes}
   * @memberof Log
   */
  event_type: LogEventTypes;
  /**
   * Log event Id.
   * @type {LogEventIds}
   * @memberof Log
   */
  event_id: LogEventIds;
  /**
   * Message
   * @type {string}
   * @memberof Log
   */
  message?: string | null;
  /**
   * The Activity Id.
   * @type {string}
   * @memberof Log
   */
  activity_id?: string | null;
  /**
   * Specifies the event time (in Epoch).
   * @type {number}
   * @memberof Log
   */
  time_stamp: number;
  /**
   * The Request metadata.
   * @type {LogRequestMetadata}
   * @memberof Log
   */
  metadata: LogRequestMetadata;
  /**
   * Specifies if the log was triggered by a user interactive process.
   * @type {boolean}
   * @memberof Log
   */
  interactive: boolean;
  /**
   * The client Id.
   * @type {string}
   * @memberof Log
   */
  client_id?: string | null;
  /**
   * The Client Name.
   * @type {string}
   * @memberof Log
   */
  client_name?: string | null;
}
