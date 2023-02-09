import { MonoCloudException } from './exceptions/monocloud-exception';
import { MonoCloudConfig } from './models/monocloud-config';
import {
  ClientsClient,
  KeysClient,
  LogsClient,
  OptionsClient,
  ResourcesClient,
  TenantsClient,
  TrustStoreClient,
} from './sdk';

export class MonoCloudManageClient {
  public readonly clients: ClientsClient;

  public readonly options: OptionsClient;

  public readonly resources: ResourcesClient;

  public readonly keys: KeysClient;

  public readonly trustStore: TrustStoreClient;

  public readonly logs: LogsClient;

  public readonly tenants: TenantsClient;

  private constructor(options: MonoCloudConfig, baseDomain: string) {
    this.clients = new ClientsClient(options, `https://${baseDomain}`);
    this.options = new OptionsClient(options, `https://${baseDomain}`);
    this.resources = new ResourcesClient(options, `https://${baseDomain}`);
    this.keys = new KeysClient(options, `https://${baseDomain}`);
    this.trustStore = new TrustStoreClient(options, `https://${baseDomain}`);
    this.logs = new LogsClient(options, `https://${baseDomain}`);
    this.tenants = new TenantsClient(options, `https://${baseDomain}`);
  }

  public static init(options?: MonoCloudConfig): MonoCloudManageClient {
    const envTimeout = parseInt(process.env.MC_MANAGE_TIMEOUT ?? '', 10);

    const opt: MonoCloudConfig = {
      apiKey: options?.apiKey ?? process.env.MC_MANAGE_API_KEY,
      token: options?.token ?? process.env.MC_MANAGE_TOKEN,
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

    if (!opt.tenantId?.trim()) {
      throw new MonoCloudException('Tenant ID is required');
    }

    if (!opt.apiKey?.trim() && !opt.token?.trim()) {
      throw new MonoCloudException('API Key or Token are required');
    }

    return new MonoCloudManageClient(
      opt,
      process.env.MC_MANAGE_BASE_DOMAIN ?? 'api.monocloud.com'
    );
  }
}
