import { SecretTypes } from './secret-types';

/**
 * The Secret response class
 * @export
 * @interface SecretValue
 */
export interface SecretValue {
  /**
   * Unique ID of the client secret
   * @type {string}
   * @memberof SecretValue
   */
  id: string;
  /**
   * Brief description of the secret
   * @type {string}
   * @memberof SecretValue
   */
  description?: string | null;
  /**
   * The secret
   * @type {string}
   * @memberof SecretValue
   */
  value: string;
  /**
   * The expiration date of the secret (in Epoch)
   * @type {number}
   * @memberof SecretValue
   */
  expiration?: number | null;
  /**
   * Specifies type of secret
   * @type {SecretTypes}
   * @memberof SecretValue
   */
  type: SecretTypes;
  /**
   * Specifies the creation time of the client secret (in Epoch).
   * @type {number}
   * @memberof SecretValue
   */
  creation_time: number;
  /**
   * Specifies the last update time of the client secret (in Epoch).
   * @type {number}
   * @memberof SecretValue
   */
  last_updated: number;
}
