import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import { PatchTenantRequest, Tenant } from '../models';

export class TenantsClient extends MonoCloudClientBase {
  /**
   *
   * @summary Patch a Tenant
   * @param {PatchTenantRequest} patchTenantRequest Request Body
   * @throws {MonoCloudException}
   * @memberof TenantsClient
   *
   */
  public patchTenant(
    patchTenantRequest: PatchTenantRequest
  ): Promise<MonoCloudResponse<Tenant>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/v1/tenants`;

    request.url = url;

    request.data = JSON.stringify(patchTenantRequest);

    return this.processRequest<Tenant>(request);
  }
}
