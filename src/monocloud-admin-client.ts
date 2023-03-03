import { AxiosInstance } from 'axios';
import { MonoCloudException, MonoCloudConfig } from '@monocloud/sdk-js-core';
import {
  ClientsClient,
  KeysClient,
  LogsClient,
  OptionsClient,
  ResourcesClient,
  TenantsClient,
  TrustStoreClient,
} from './clients';

export class MonoCloudAdminClient {
  public readonly clients: ClientsClient;

  public readonly keys: KeysClient;

  public readonly logs: LogsClient;

  public readonly options: OptionsClient;

  public readonly resources: ResourcesClient;

  public readonly tenants: TenantsClient;

  public readonly trustStore: TrustStoreClient;

  private constructor(
    options: MonoCloudConfig,
    baseDomain: string,
    instance?: AxiosInstance
  ) {
    this.clients = new ClientsClient(
      options,
      `https://${baseDomain}`,
      instance
    );
    this.keys = new KeysClient(options, `https://${baseDomain}`, instance);
    this.logs = new LogsClient(options, `https://${baseDomain}`, instance);
    this.options = new OptionsClient(
      options,
      `https://${baseDomain}`,
      instance
    );
    this.resources = new ResourcesClient(
      options,
      `https://${baseDomain}`,
      instance
    );
    this.tenants = new TenantsClient(
      options,
      `https://${baseDomain}`,
      instance
    );
    this.trustStore = new TrustStoreClient(
      options,
      `https://${baseDomain}`,
      instance
    );
  }

  public static init(
    options?: MonoCloudConfig,
    instance?: AxiosInstance
  ): MonoCloudAdminClient {
    const envTimeout = parseInt(process.env.MC_MANAGE_TIMEOUT ?? '', 10);

    const opt: MonoCloudConfig = {
      apiKey: options?.apiKey ?? process.env.MC_MANAGE_API_KEY ?? '',
      tenantId: options?.tenantId ?? process.env.MC_TENANT_ID ?? '',
      config: options?.config ?? {
        retry: options?.config?.retry ?? process.env.MC_MANAGE_RETRY === 'true',
        timeout:
          options?.config?.timeout ??
          (Number.isInteger(envTimeout) && envTimeout > 0)
            ? envTimeout
            : undefined,
      },
    };

    if (!instance) {
      if (!opt.tenantId?.trim()) {
        throw new MonoCloudException('Tenant ID is required');
      }

      if (!opt.apiKey?.trim()) {
        throw new MonoCloudException('API Key is required');
      }
    }

    return new MonoCloudAdminClient(
      opt,
      process.env.MC_MANAGE_BASE_DOMAIN ?? 'api.monocloud.com',
      instance
    );
  }
}
