import { DeltaRevocation } from './delta-revocation';

/**
 * The Revocation Grouped response
 * @export
 * @interface RevocationGrouped
 */
export interface RevocationGrouped {
  /**
   * Revocation Id.
   * @type {string}
   * @memberof RevocationGrouped
   */
  id: string;
  /**
   * Crl Pem Value.
   * @type {string}
   * @memberof RevocationGrouped
   */
  value: string;
  /**
   * Thumbprint of the CA certificate the crl belongs to.
   * @type {string}
   * @memberof RevocationGrouped
   */
  issuer_thumbprint: string;
  /**
   * Specifies the issued time of the revocation (in Epoch).
   * @type {number}
   * @memberof RevocationGrouped
   */
  issued_at: number;
  /**
   * Specifies the next update of the revocation (in Epoch).
   * @type {number}
   * @memberof RevocationGrouped
   */
  next_update?: number | null;
  /**
   * Specifies the creation time of the revocation (in Epoch).
   * @type {number}
   * @memberof RevocationGrouped
   */
  creation_time: number;
  /**
   * The crl number.
   * @type {number}
   * @memberof RevocationGrouped
   */
  crl_number?: number | null;
  /**
   * List of delta revocations.
   * @type {DeltaRevocation[]}
   * @memberof RevocationGrouped
   */
  deltas: DeltaRevocation[];
}
