import { SecretTypes } from './secret-types';

/**
 * The Create Client Secret class
 * @export
 * @interface CreateSecretRequest
 */
export interface CreateSecretRequest {
  /**
   * Brief description of the secret
   * @type {string}
   * @memberof CreateSecretRequest
   */
  description?: string | null;
  /**
   * The secret
   * @type {string}
   * @memberof CreateSecretRequest
   */
  value: string;
  /**
   * The expiration date of the secret (in Epoch)
   * @type {number}
   * @memberof CreateSecretRequest
   */
  expiration?: number | null;
  /**
   * Specifies type of secret
   * @type {SecretTypes}
   * @memberof CreateSecretRequest
   */
  type?: SecretTypes;
}
