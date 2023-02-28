import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import { Log, LogSummary } from '../models';

export class LogsClient extends MonoCloudClientBase {
  /**
   *
   * @summary Find a Log by Id
   * @param {string} id Log Id
   * @throws {MonoCloudException}
   * @memberof LogsClient
   *
   */
  public findLogById(id: string): Promise<MonoCloudResponse<Log>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/logs/{id}`.replace(
      `{${'id'}}`,
      encodeURIComponent(String(id))
    );

    request.url = url;

    return this.processRequest<Log>(request);
  }

  /**
   *
   * @summary Get all Log Summary
   * @param {number} [page]
   * @param {number} [size]
   * @throws {MonoCloudException}
   * @memberof LogsClient
   *
   */
  public getAllLogs(
    page?: number,
    size?: number
  ): Promise<MonoCloudResponse<Array<LogSummary>>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/logs`;

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    return this.processRequest<Array<LogSummary>>(request);
  }
}
