import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import { KeyMaterial } from '../models';

export class KeysClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get All Valid Keys
   * @param {number} [page]
   * @param {number} [size]
   * @returns KeyMaterial[] - Success
   * @throws {MonoCloudException}
   * @memberof KeysClient
   *
   */
  public getAllKeyMaterials(
    page?: number,
    size?: number
  ): Promise<MonoCloudResponse<KeyMaterial[]>> {
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

    return this.processRequest<KeyMaterial[]>(request);
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

    const url = `/keys/{keyId}/revoke`.replace(
      `{${'keyId'}}`,
      encodeURIComponent(String(keyId))
    );

    request.url = url;

    return this.processRequest<null>(request);
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

    const url = `/keys/{keyId}/rotate`.replace(
      `{${'keyId'}}`,
      encodeURIComponent(String(keyId))
    );

    request.url = url;

    return this.processRequest<null>(request);
  }
}
