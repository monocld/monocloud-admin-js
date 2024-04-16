import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
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
    const url = `/keys`;

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
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
    const url = `/keys/{key_id}/rotate`.replace(
      `{${'key_id'}}`,
      encodeURIComponent(String(keyId))
    );

    const request: MonoCloudRequest = { method: 'PUT', url };

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
    const url = `/keys/{key_id}/revoke`.replace(
      `{${'key_id'}}`,
      encodeURIComponent(String(keyId))
    );

    const request: MonoCloudRequest = { method: 'PUT', url };

    return this.processRequest<null>(request);
  }
}
