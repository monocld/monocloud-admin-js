/**
 * The Delta Revocation response
 * @export
 * @interface DeltaRevocation
 */
export interface DeltaRevocation {
  /**
   * Revocation Id.
   * @type {string}
   * @memberof DeltaRevocation
   */
  id: string;
  /**
   * Crl Pem Value.
   * @type {string}
   * @memberof DeltaRevocation
   */
  value: string;
  /**
   * Thumbprint of the CA certificate the crl belongs to.
   * @type {string}
   * @memberof DeltaRevocation
   */
  issuer_thumbprint: string;
  /**
   * Specifies the issued time of the revocation (in Epoch).
   * @type {number}
   * @memberof DeltaRevocation
   */
  issued_at: number;
  /**
   * Specifies the next update of the revocation (in Epoch).
   * @type {number}
   * @memberof DeltaRevocation
   */
  next_update?: number | null;
  /**
   * Specifies the creation time of the revocation (in Epoch).
   * @type {number}
   * @memberof DeltaRevocation
   */
  creation_time: number;
  /**
   * The crl number.
   * @type {number}
   * @memberof DeltaRevocation
   */
  crl_number: number;
  /**
   * The Delta crl number.
   * @type {number}
   * @memberof DeltaRevocation
   */
  delta_crl_number: number;
  /**
   * Base Revocation Id.
   * @type {string}
   * @memberof DeltaRevocation
   */
  base_revocation_id: string;
}
