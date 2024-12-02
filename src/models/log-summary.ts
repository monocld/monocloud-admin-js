import { EventCodes } from './event-codes';
import { EventTypes } from './event-types';
import { LogActor } from './log-actor';
import { LogCategories } from './log-categories';
import { LogClient } from './log-client';
import { LogRequest } from './log-request';
import { LogSystem } from './log-system';
import { LogTarget } from './log-target';

/**
 * The Log Summary response
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
   * Specifies the event time (in Epoch).
   * @type {number}
   * @memberof LogSummary
   */
  time_stamp: number;
  /**
   * Log Category
   * @type {LogCategories}
   * @memberof LogSummary
   */
  category: LogCategories;
  /**
   * Log Name.
   * @type {string}
   * @memberof LogSummary
   */
  name: string;
  /**
   * Log Description.
   * @type {string}
   * @memberof LogSummary
   */
  description: string;
  /**
   * Log Type.
   * @type {EventTypes}
   * @memberof LogSummary
   */
  type: EventTypes;
  /**
   * Log code.
   * @type {EventCodes}
   * @memberof LogSummary
   */
  code: EventCodes;
  /**
   * Message
   * @type {string}
   * @memberof LogSummary
   */
  message?: string | null;
  /**
   * The system details
   * @type {LogSystem}
   * @memberof LogSummary
   */
  system: LogSystem;
  /**
   * The request details
   * @type {LogRequest}
   * @memberof LogSummary
   */
  request: LogRequest;
  /**
   * The source of the request
   * @type {string}
   * @memberof LogSummary
   */
  source?: string | null;
  /**
   * The actor who performed the action
   * @type {LogActor}
   * @memberof LogSummary
   */
  actor: LogActor;
  /**
   * List of targets
   * @type {LogTarget[]}
   * @memberof LogSummary
   */
  targets: LogTarget[];
  /**
   * The client details
   * @type {LogClient}
   * @memberof LogSummary
   */
  client?: LogClient | null;
  /**
   * The Log Details response
   * @type {object}
   * @memberof LogSummary
   */
  details?: object;
}
