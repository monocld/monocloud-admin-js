import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import { Log, LogSummary } from '../models';

export class LogsClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get all Log Summary
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @param {string} [filter] Value by which the resources needs to be filtered.
   * @param {string} [sort] Value by results will be sorted.
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
  ): Promise<MonoCloudResponse<LogSummary[]>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/logs`;

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.params.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.params.sort = String(sort);
    }

    return this.processRequest<LogSummary[]>(request);
  }

  /**
   *
   * @summary Find a Log by Id
   * @param {string} id Log Id
   * @returns Log - Success
   * @throws {MonoCloudException}
   * @memberof LogsClient
   *
   */
  public findLogById(id: string): Promise<MonoCloudResponse<Log>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/logs/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<Log>(request);
  }
}
