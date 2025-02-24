import { SecretTypes } from './secret-types';

/**
 * The Secret response class
 * @export
 * @interface Secret
 */
export interface Secret {
  /**
   * Unique ID of the client secret
   * @type {string}
   * @memberof Secret
   */
  id: string;
  /**
   * Brief description of the secret
   * @type {string}
   * @memberof Secret
   */
  description?: string | null;
  /**
   * The expiration date of the secret (in Epoch)
   * @type {number}
   * @memberof Secret
   */
  expiration?: number | null;
  /**
   * Specifies type of secret
   * @type {SecretTypes}
   * @memberof Secret
   */
  type: SecretTypes;
  /**
   * Specifies the creation time of the client secret (in Epoch).
   * @type {number}
   * @memberof Secret
   */
  creation_time: number;
  /**
   * Specifies the last update time of the client secret (in Epoch).
   * @type {number}
   * @memberof Secret
   */
  last_updated: number;
  /**
   * The secret
   * @type {string}
   * @memberof Secret
   */
  secret_value: string;
}
