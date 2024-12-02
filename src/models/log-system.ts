import { LogIpDetails } from './log-ip-details';

/**
 * The Log System response
 * @export
 * @interface LogSystem
 */
export interface LogSystem {
  /**
   * The activity id
   * @type {string}
   * @memberof LogSystem
   */
  activity_id?: string | null;
  /**
   * The process id
   * @type {number}
   * @memberof LogSystem
   */
  process_id: number;
  /**
   * The local ip address details
   * @type {LogIpDetails}
   * @memberof LogSystem
   */
  local_ip: LogIpDetails;
}
