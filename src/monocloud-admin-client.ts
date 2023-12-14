import { AxiosInstance } from 'axios';
import { MonoCloudConfig } from '@monocloud/sdk-js-core';
import {
  ClientsClient,
  KeysClient,
  LogsClient,
  OptionsClient,
  ResourcesClient,
  TrustStoreClient,
} from './clients';

export class MonoCloudAdminClient {
  public readonly clients: ClientsClient;

  public readonly keys: KeysClient;

  public readonly logs: LogsClient;

  public readonly options: OptionsClient;

  public readonly resources: ResourcesClient;

  public readonly trustStore: TrustStoreClient;

  private constructor(options: MonoCloudConfig, instance?: AxiosInstance) {
    this.clients = new ClientsClient(options, instance);

    this.keys = new KeysClient(options, instance);

    this.logs = new LogsClient(options, instance);

    this.options = new OptionsClient(options, instance);

    this.resources = new ResourcesClient(options, instance);

    this.trustStore = new TrustStoreClient(options, instance);
  }

  public static init(
    options?: MonoCloudConfig,
    instance?: AxiosInstance
  ): MonoCloudAdminClient {
    const envTimeout = parseInt(process.env.MC_ADMIN_TIMEOUT ?? '', 10);

    const opt: MonoCloudConfig = {
      domain: options?.domain ?? process.env.MC_ADMIN_DOMAIN ?? '',
      apiKey: options?.apiKey ?? process.env.MC_ADMIN_API_KEY ?? '',
      config: options?.config ?? {
        retry: options?.config?.retry ?? process.env.MC_ADMIN_RETRY === 'true',
        timeout:
          options?.config?.timeout ??
          (Number.isInteger(envTimeout) && envTimeout > 0)
            ? envTimeout
            : undefined,
      },
    };

    return new MonoCloudAdminClient(opt, instance);
  }
}
