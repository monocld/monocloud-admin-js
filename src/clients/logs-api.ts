import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import { Log, LogSummary } from '../models';

export class LogsClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get all Log Summary
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the logs needs to be filtered.
   * @param {string} [sort] Value in \'sort_key:sort_order\' format, by which results will be sorted. Sort order value can be \'1\' for ascending and \'-1\' for descending.  Acceptable sort key values are \'time_stamp\', \'category\', \'code\', \'type\', and \'name\'
   * @returns LogSummary[] - Success
   * @throws {MonoCloudException}
   * @memberof LogsClient
   *
   */
  public getAllLogs(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<LogSummary[]>> {
    const url = `/logs`;

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<LogSummary[]>(request);
  }

  /**
   *
   * @summary Find a Log by Id
   * @param {string} logId Log Id
   * @returns Log - Success
   * @throws {MonoCloudException}
   * @memberof LogsClient
   *
   */
  public findLogById(logId: string): Promise<MonoCloudResponse<Log>> {
    const url = `/logs/{log_id}`.replace(
      `{${'log_id'}}`,
      encodeURIComponent(String(logId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Log>(request);
  }
}
