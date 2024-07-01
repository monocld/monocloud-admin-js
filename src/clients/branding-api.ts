import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import { BrandingOptions, PatchBrandingOptionsRequest } from '../models';

export class BrandingClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get Branding Options
   * @returns BrandingOptions - Success
   * @throws {MonoCloudException}
   * @memberof BrandingClient
   *
   */
  public findBrandingOptions(): Promise<MonoCloudResponse<BrandingOptions>> {
    const url = `/branding`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<BrandingOptions>(request);
  }

  /**
   *
   * @summary Update Branding Options
   * @param {PatchBrandingOptionsRequest} patchBrandingOptionsRequest Request Body
   * @returns BrandingOptions - Success
   * @throws {MonoCloudException}
   * @memberof BrandingClient
   *
   */
  public patchBrandingOptions(
    patchBrandingOptionsRequest: PatchBrandingOptionsRequest
  ): Promise<MonoCloudResponse<BrandingOptions>> {
    const url = `/branding`;

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchBrandingOptionsRequest;

    return this.processRequest<BrandingOptions>(request);
  }
}
