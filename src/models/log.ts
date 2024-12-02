import { EventCodes } from './event-codes';
import { EventTypes } from './event-types';
import { LogActor } from './log-actor';
import { LogCategories } from './log-categories';
import { LogClient } from './log-client';
import { LogRequest } from './log-request';
import { LogSystem } from './log-system';
import { LogTarget } from './log-target';

/**
 * The Log response
 * @export
 * @interface Log
 */
export interface Log {
  /**
   * Unique identifier of the log
   * @type {string}
   * @memberof Log
   */
  id: string;
  /**
   * Specifies the event time (in Epoch).
   * @type {number}
   * @memberof Log
   */
  time_stamp: number;
  /**
   * Log Category
   * @type {LogCategories}
   * @memberof Log
   */
  category: LogCategories;
  /**
   * Log Name.
   * @type {string}
   * @memberof Log
   */
  name: string;
  /**
   * Log Description.
   * @type {string}
   * @memberof Log
   */
  description: string;
  /**
   * Log Type.
   * @type {EventTypes}
   * @memberof Log
   */
  type: EventTypes;
  /**
   * Log code.
   * @type {EventCodes}
   * @memberof Log
   */
  code: EventCodes;
  /**
   * Message
   * @type {string}
   * @memberof Log
   */
  message?: string | null;
  /**
   * The system details
   * @type {LogSystem}
   * @memberof Log
   */
  system: LogSystem;
  /**
   * The request details
   * @type {LogRequest}
   * @memberof Log
   */
  request: LogRequest;
  /**
   * The source of the request
   * @type {string}
   * @memberof Log
   */
  source?: string | null;
  /**
   * The actor who performed the action
   * @type {LogActor}
   * @memberof Log
   */
  actor: LogActor;
  /**
   * List of targets
   * @type {LogTarget[]}
   * @memberof Log
   */
  targets: LogTarget[];
  /**
   * The client details
   * @type {LogClient}
   * @memberof Log
   */
  client?: LogClient | null;
  /**
   * The Log Details response
   * @type {object}
   * @memberof Log
   */
  details?: object;
}
