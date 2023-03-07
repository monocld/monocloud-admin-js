/**
 * Trust Store Certificate Chained Response
 * @export
 * @interface TrustStoreCertificateParsed
 */
export interface TrustStoreCertificateParsed {
  /**
   * Certificate Id.
   * @type {string}
   * @memberof TrustStoreCertificateParsed
   */
  id: string;
  /**
   * Specifies if the certificate is enabled.
   * @type {boolean}
   * @memberof TrustStoreCertificateParsed
   */
  enabled: boolean;
  /**
   * Certificate Value.
   * @type {string}
   * @memberof TrustStoreCertificateParsed
   */
  value: string;
  /**
   * The associated name/alias for the certificate.
   * @type {string}
   * @memberof TrustStoreCertificateParsed
   */
  name: string;
  /**
   * The algorithm used to create the signature of the certificate.
   * @type {string}
   * @memberof TrustStoreCertificateParsed
   */
  algorithm: string;
  /**
   * The X.509 format version of the certificate.
   * @type {number}
   * @memberof TrustStoreCertificateParsed
   */
  version: number;
  /**
   * The subject distinguished names from the certificate.
   * @type {{ [key: string]: string; }}
   * @memberof TrustStoreCertificateParsed
   */
  subject: { [key: string]: string };
  /**
   * The subject distinguished names from the certificate authority that issued the X.509 certificate.
   * @type {{ [key: string]: string; }}
   * @memberof TrustStoreCertificateParsed
   */
  issuer: { [key: string]: string };
  /**
   * The serial number of the certificate as a hexadecimal string.
   * @type {string}
   * @memberof TrustStoreCertificateParsed
   */
  serial_number: string;
  /**
   * Specifies the time (in Epoch) on which a certificate becomes valid.
   * @type {number}
   * @memberof TrustStoreCertificateParsed
   */
  valid_from: number;
  /**
   * Specifies the time (in Epoch) after which a certificate is no longer valid.
   * @type {number}
   * @memberof TrustStoreCertificateParsed
   */
  valid_to: number;
  /**
   * Specifies whether the certificate contains a private key.
   * @type {boolean}
   * @memberof TrustStoreCertificateParsed
   */
  has_private_key: boolean;
  /**
   * Specifies whether the certificate belongs to a certificate authority. If true the certificate can be used to issue other certificates.
   * @type {boolean}
   * @memberof TrustStoreCertificateParsed
   */
  is_ca: boolean;
  /**
   * Specifies whether the certificate has expired.
   * @type {boolean}
   * @memberof TrustStoreCertificateParsed
   */
  is_expired: boolean;
  /**
   * Specifies whether the certificate is self signed.
   * @type {boolean}
   * @memberof TrustStoreCertificateParsed
   */
  is_self_signed: boolean;
  /**
   * Specifies whether the certificate is issued by a certificate in the store.
   * @type {boolean}
   * @memberof TrustStoreCertificateParsed
   */
  is_child: boolean;
  /**
   * List of certificates that are issued by the current certificate.
   * @type {TrustStoreCertificateParsed[]}
   * @memberof TrustStoreCertificateParsed
   */
  children: TrustStoreCertificateParsed[];
}
