import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import { KeyMaterial } from '../models';

export class KeysClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get All Valid Keys
   * @param {number} [page]
   * @param {number} [size]
   * @throws {MonoCloudException}
   * @memberof KeysClient
   *
   */
  public getAllKeyMaterials(
    page?: number,
    size?: number
  ): Promise<MonoCloudResponse<Array<KeyMaterial>>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/keys`;
    request.url = url;

    request.params = {};
    if (page !== undefined && page !== null) {
      request.params.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.params.size = String(size);
    }

    return this.processRequest<Array<KeyMaterial>>(request);
  }

  /**
   *
   * @summary Revoke Current Key
   * @param {string} keyId Key Id
   * @throws {MonoCloudException}
   * @memberof KeysClient
   *
   */
  public revokeKey(keyId: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'PUT' };

    const url = `/v1/keys/{keyId}/revoke`.replace(
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
   * @throws {MonoCloudException}
   * @memberof KeysClient
   *
   */
  public rotateKey(keyId: string): Promise<MonoCloudResponse<null>> {
    const request: AxiosRequestConfig = { method: 'PUT' };

    const url = `/v1/keys/{keyId}/rotate`.replace(
      `{${'keyId'}}`,
      encodeURIComponent(String(keyId))
    );
    request.url = url;

    return this.processRequest<null>(request);
  }
}
