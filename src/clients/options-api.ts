import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudRequest,
} from '@monocloud/sdk-js-core';
import {
  AuthenticationOptions,
  CommunicationOptions,
  PatchAuthenticationOptionsRequest,
  PatchCommunicationOptionsRequest,
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
}
