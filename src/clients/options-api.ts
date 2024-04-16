import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import {
  AuthenticationOptions,
  BrandingOptions,
  CommunicationOptions,
  MtlsOptions,
  PatchAuthenticationOptionsRequest,
  PatchBrandingOptionsRequest,
  PatchCommunicationOptionsRequest,
  PatchMtlsOptionsRequest,
} from '../models';

export class OptionsClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get Authentication Options
   * @returns AuthenticationOptions - Success
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public findAuthenticationOptions(): Promise<
    MonoCloudResponse<AuthenticationOptions>
  > {
    const url = `/options/authentication`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<AuthenticationOptions>(request);
  }

  /**
   *
   * @summary Update Authentication Options
   * @param {PatchAuthenticationOptionsRequest} patchAuthenticationOptionsRequest Request Body
   * @returns AuthenticationOptions - Success
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public patchAuthenticationOptions(
    patchAuthenticationOptionsRequest: PatchAuthenticationOptionsRequest
  ): Promise<MonoCloudResponse<AuthenticationOptions>> {
    const url = `/options/authentication`;

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchAuthenticationOptionsRequest;

    return this.processRequest<AuthenticationOptions>(request);
  }

  /**
   *
   * @summary Get Branding Options
   * @returns BrandingOptions - Success
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public findBrandingOptions(): Promise<MonoCloudResponse<BrandingOptions>> {
    const url = `/options/branding`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<BrandingOptions>(request);
  }

  /**
   *
   * @summary Update Branding Options
   * @param {PatchBrandingOptionsRequest} patchBrandingOptionsRequest Request Body
   * @returns BrandingOptions - Success
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public patchBrandingOptions(
    patchBrandingOptionsRequest: PatchBrandingOptionsRequest
  ): Promise<MonoCloudResponse<BrandingOptions>> {
    const url = `/options/branding`;

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchBrandingOptionsRequest;

    return this.processRequest<BrandingOptions>(request);
  }

  /**
   *
   * @summary Get Communication Options
   * @returns CommunicationOptions - Success
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public findCommunicationOptions(): Promise<
    MonoCloudResponse<CommunicationOptions>
  > {
    const url = `/options/communication`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<CommunicationOptions>(request);
  }

  /**
   *
   * @summary Update Communication Options
   * @param {PatchCommunicationOptionsRequest} patchCommunicationOptionsRequest Request Body
   * @returns CommunicationOptions - Success
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public patchCommunicationOptions(
    patchCommunicationOptionsRequest: PatchCommunicationOptionsRequest
  ): Promise<MonoCloudResponse<CommunicationOptions>> {
    const url = `/options/communication`;

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchCommunicationOptionsRequest;

    return this.processRequest<CommunicationOptions>(request);
  }

  /**
   *
   * @summary Get Mtls Options
   * @returns MtlsOptions - Success
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public findMtlsOptions(): Promise<MonoCloudResponse<MtlsOptions>> {
    const url = `/options/mtls`;

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<MtlsOptions>(request);
  }

  /**
   *
   * @summary Update Mtls Options
   * @param {PatchMtlsOptionsRequest} patchMtlsOptionsRequest Request Body
   * @returns MtlsOptions - Success
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public patchMtlsOptions(
    patchMtlsOptionsRequest: PatchMtlsOptionsRequest
  ): Promise<MonoCloudResponse<MtlsOptions>> {
    const url = `/options/mtls`;

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchMtlsOptionsRequest;

    return this.processRequest<MtlsOptions>(request);
  }
}
