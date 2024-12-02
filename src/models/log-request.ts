import { LogIpDetails } from './log-ip-details';
import { LogLocation } from './log-location';

/**
 * The Log Request response
 * @export
 * @interface LogRequest
 */
export interface LogRequest {
  /**
   * The trace identifier of the request
   * @type {string}
   * @memberof LogRequest
   */
  trace_id?: string | null;
  /**
   * The user agent of the request.
   * @type {string}
   * @memberof LogRequest
   */
  user_agent?: string | null;
  /**
   * The remote ip address of the request
   * @type {LogIpDetails}
   * @memberof LogRequest
   */
  remote_ip?: LogIpDetails | null;
  /**
   * The location details from which the request was made
   * @type {LogLocation}
   * @memberof LogRequest
   */
  location?: LogLocation | null;
}
