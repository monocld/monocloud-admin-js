import { AxiosRequestConfig } from 'axios';
import { MonoCloudClientBase, MonoCloudResponse } from '@monocloud/sdk-js-core';
import {
  AuthenticationOptions,
  BrandingOptions,
  CommunicationOptions,
  DeviceFlowOptions,
  MtlsOptions,
  PatchAuthenticationOptionsRequest,
  PatchBrandingOptionsRequest,
  PatchCommunicationOptionsRequest,
  PatchDeviceFlowOptionsRequest,
  PatchMtlsOptionsRequest,
} from '../models';

export class OptionsClient extends MonoCloudClientBase {
  /**
   *
   * @summary Get Authentication Options
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public findAuthenticationOptions(): Promise<
    MonoCloudResponse<AuthenticationOptions>
  > {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/options/authentication`;
    request.url = url;

    return this.processRequest<AuthenticationOptions>(request);
  }

  /**
   *
   * @summary Get Branding Options
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public findBrandingOptions(): Promise<MonoCloudResponse<BrandingOptions>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/options/branding`;
    request.url = url;

    return this.processRequest<BrandingOptions>(request);
  }

  /**
   *
   * @summary Get Communication Options
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public findCommunicationOptions(): Promise<
    MonoCloudResponse<CommunicationOptions>
  > {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/options/communication`;
    request.url = url;

    return this.processRequest<CommunicationOptions>(request);
  }

  /**
   *
   * @summary Get DeviceFlow Options
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public findDeviceFlowOptions(): Promise<
    MonoCloudResponse<DeviceFlowOptions>
  > {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/options/device_flow`;
    request.url = url;

    return this.processRequest<DeviceFlowOptions>(request);
  }

  /**
   *
   * @summary Get Mtls Options
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public findMtlsOptions(): Promise<MonoCloudResponse<MtlsOptions>> {
    const request: AxiosRequestConfig = { method: 'GET' };

    const url = `/v1/options/mtls`;
    request.url = url;

    return this.processRequest<MtlsOptions>(request);
  }

  /**
   *
   * @summary Update Authentication Options
   * @param {PatchAuthenticationOptionsRequest} patchAuthenticationOptionsRequest Request Body
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public patchAuthenticationOptions(
    patchAuthenticationOptionsRequest: PatchAuthenticationOptionsRequest
  ): Promise<MonoCloudResponse<AuthenticationOptions>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/v1/options/authentication`;
    request.url = url;

    request.data = JSON.stringify(patchAuthenticationOptionsRequest);

    return this.processRequest<AuthenticationOptions>(request);
  }

  /**
   *
   * @summary Update Branding Options
   * @param {PatchBrandingOptionsRequest} patchBrandingOptionsRequest Request Body
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public patchBrandingOptions(
    patchBrandingOptionsRequest: PatchBrandingOptionsRequest
  ): Promise<MonoCloudResponse<BrandingOptions>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/v1/options/branding`;
    request.url = url;

    request.data = JSON.stringify(patchBrandingOptionsRequest);

    return this.processRequest<BrandingOptions>(request);
  }

  /**
   *
   * @summary Update Communication Options
   * @param {PatchCommunicationOptionsRequest} patchCommunicationOptionsRequest Request Body
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public patchCommunicationOptions(
    patchCommunicationOptionsRequest: PatchCommunicationOptionsRequest
  ): Promise<MonoCloudResponse<CommunicationOptions>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/v1/options/communication`;
    request.url = url;

    request.data = JSON.stringify(patchCommunicationOptionsRequest);

    return this.processRequest<CommunicationOptions>(request);
  }

  /**
   *
   * @summary Update DeviceFlow Options
   * @param {PatchDeviceFlowOptionsRequest} patchDeviceFlowOptionsRequest Request Body
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public patchDeviceFlowOptions(
    patchDeviceFlowOptionsRequest: PatchDeviceFlowOptionsRequest
  ): Promise<MonoCloudResponse<DeviceFlowOptions>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/v1/options/device_flow`;
    request.url = url;

    request.data = JSON.stringify(patchDeviceFlowOptionsRequest);

    return this.processRequest<DeviceFlowOptions>(request);
  }

  /**
   *
   * @summary Update Mtls Options
   * @param {PatchMtlsOptionsRequest} patchMtlsOptionsRequest Request Body
   * @throws {MonoCloudException}
   * @memberof OptionsClient
   *
   */
  public patchMtlsOptions(
    patchMtlsOptionsRequest: PatchMtlsOptionsRequest
  ): Promise<MonoCloudResponse<MtlsOptions>> {
    const request: AxiosRequestConfig = { method: 'PATCH' };

    const url = `/v1/options/mtls`;
    request.url = url;

    request.data = JSON.stringify(patchMtlsOptionsRequest);

    return this.processRequest<MtlsOptions>(request);
  }
}
