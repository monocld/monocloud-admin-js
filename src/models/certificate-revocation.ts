/**
 * Certificate Revocation Response
 * @export
 * @interface CertificateRevocation
 */
export interface CertificateRevocation {
  /**
   * Revocation Id.
   * @type {string}
   * @memberof CertificateRevocation
   */
  id: string;
  /**
   * Crl Pem Value.
   * @type {string}
   * @memberof CertificateRevocation
   */
  value: string;
  /**
   * Thumbprint of the CA certificate the crl belongs to.
   * @type {string}
   * @memberof CertificateRevocation
   */
  issuer_thumbprint: string;
  /**
   * Specifies the issued time of the revocation (in Epoch).
   * @type {number}
   * @memberof CertificateRevocation
   */
  issued_at: number;
  /**
   * Specifies the creation time of the revocation (in Epoch).
   * @type {number}
   * @memberof CertificateRevocation
   */
  creation_time: number;
}
