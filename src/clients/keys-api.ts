import { AxiosRequestConfig } from 'axios';
import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
} from '@monocloud/sdk-js-core';
import { KeyMaterial } from '../models';

export class KeysClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get All Valid Keys
   * @param {number} [page] Page Number
   * @param {number} [size] Page Size
   * @returns KeyMaterial[] - Success
   * @throws {MonoCloudException}
   * @memberof KeysClient
   *
   */
  public getAllKeyMaterials(
    page?: number,
    size?: number
  ): Promise<MonoCloudPageResponse<KeyMaterial[]>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/keys`;

    request.url = url;

    request.params = {};

    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    return this.processPaginatedRequest<KeyMaterial[]>(request);
  }

  /**
   *
   * @summary Rotate Current Key
   * @param {string} keyId Key Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof KeysClient
   *
   */
  public rotateKey(keyId: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'PUT' };

    const url = `/keys/{key_id}/rotate`.replace(
      `{${'key_id'}}`,
      encodeURIComponent(String(keyId))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }

  /**
   *
   * @summary Revoke Current Key
   * @param {string} keyId Key Id
   * @returns No Content
   * @throws {MonoCloudException}
   * @memberof KeysClient
   *
   */
  public revokeKey(keyId: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'PUT' };

    const url = `/keys/{key_id}/revoke`.replace(
      `{${'key_id'}}`,
      encodeURIComponent(String(keyId))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }
}
