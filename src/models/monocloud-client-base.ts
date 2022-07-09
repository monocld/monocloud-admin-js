import { MonoCloudConfig } from './monocloud-config';

export abstract class MonoCloudClientBase {
  config: MonoCloudConfig;

  constructor(config: MonoCloudConfig) {
    this.config = config;
  }
}
