/**
 *
 * @export
 * @enum {string}
 */

export const TechTypes = {
  /**
   *
   */
  Unknown: 'unknown',
  /**
   *
   */
  React: 'react',
  /**
   *
   */
  ReactNative: 'react_native',
  /**
   *
   */
  Angular: 'angular',
  /**
   *
   */
  Vue: 'vue',
  /**
   *
   */
  NextJs: 'next_js',
  /**
   *
   */
  NodeJs: 'node_js',
  /**
   *
   */
  Dotnet: 'dotnet',
  /**
   *
   */
  SpringBoot: 'spring_boot',
  /**
   *
   */
  Javascript: 'javascript',
  /**
   *
   */
  Laravel: 'laravel',
  /**
   *
   */
  Django: 'django',
  /**
   *
   */
  Rails: 'rails',
  /**
   *
   */
  Go: 'go',
  /**
   *
   */
  Android: 'android',
  /**
   *
   */
  Kotlin: 'kotlin',
  /**
   *
   */
  Swift: 'swift',
  /**
   *
   */
  Flutter: 'flutter',
  /**
   *
   */
  Expo: 'expo',
  /**
   *
   */
  Device: 'device',
  /**
   *
   */
  Mtls: 'mtls',
  /**
   *
   */
  Svelte: 'svelte',
  /**
   *
   */
  AwsLambda: 'aws_lambda',
  /**
   *
   */
  Curl: 'curl',
  /**
   *
   */
  Ios: 'ios',
  /**
   *
   */
  Fastify: 'fastify',
  /**
   *
   */
  ExpressJs: 'express_js',
  /**
   *
   */
  Espressif: 'espressif',
  /**
   *
   */
  Arduino: 'arduino',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TechTypes = (typeof TechTypes)[keyof typeof TechTypes];
