/**
 * Banned Thumbprint Response
 * @export
 * @interface BannedThumbprint
 */
export interface BannedThumbprint {
  /**
   * Unique thumbprint of the certificate.
   * @type {string}
   * @memberof BannedThumbprint
   */
  value: string;
  /**
   * Specifies the reason for banning the certificate.
   * @type {string}
   * @memberof BannedThumbprint
   */
  reason?: string | null;
  /**
   * Specifies the creation time (in Epoch).
   * @type {number}
   * @memberof BannedThumbprint
   */
  creation_time: number;
}
