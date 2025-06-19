import { MonoCloudConfig, Fetcher } from '@monocloud/sdk-js-core';
import {
  BrandingClient,
  ClientsClient,
  KeysClient,
  LogsClient,
  OptionsClient,
  ResourcesClient,
  TrustStoresClient,
} from './clients';

export class MonoCloudAdminClient {
  public readonly branding: BrandingClient;

  public readonly clients: ClientsClient;

  public readonly keys: KeysClient;

  public readonly logs: LogsClient;

  public readonly options: OptionsClient;

  public readonly resources: ResourcesClient;

  public readonly trustStores: TrustStoresClient;

  private constructor(options: MonoCloudConfig, fetcher?: Fetcher) {
    this.branding = new BrandingClient(options, fetcher);

    this.clients = new ClientsClient(options, fetcher);

    this.keys = new KeysClient(options, fetcher);

    this.logs = new LogsClient(options, fetcher);

    this.options = new OptionsClient(options, fetcher);

    this.resources = new ResourcesClient(options, fetcher);

    this.trustStores = new TrustStoresClient(options, fetcher);
  }

  public static init(
    options?: MonoCloudConfig,
    fetcher?: Fetcher
  ): MonoCloudAdminClient {
    const envTimeout = parseInt(process.env.MC_ADMIN_TIMEOUT ?? '', 10);

    const opt: MonoCloudConfig = {
      domain: options?.domain ?? process.env.MC_ADMIN_DOMAIN ?? '',
      apiKey: options?.apiKey ?? process.env.MC_ADMIN_API_KEY ?? '',
      config: options?.config ?? {
        timeout:
          (options?.config?.timeout ??
          (Number.isInteger(envTimeout) && envTimeout > 0))
            ? envTimeout
            : undefined,
      },
    };

    return new MonoCloudAdminClient(opt, fetcher);
  }
}
