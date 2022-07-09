export type MonoCloudConfig = {
  tenantId: string;
  apiKey?: string;
  token?: string;
  config?: {
    timeout?: number;
    retry?: boolean;
  };
};
