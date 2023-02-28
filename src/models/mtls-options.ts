import { CertificateTypes } from './certificate-types';
import { X509RevocationMode } from './x509-revocation-mode';

/**
 * The Mtls Options response class
 * @export
 * @interface MtlsOptions
 */
export interface MtlsOptions {
  /**
   * Enable MTLS
   * @type {boolean}
   * @memberof MtlsOptions
   */
  enabled: boolean;
  /**
   * Specifies the permitted certificate types.
   * @type {CertificateTypes}
   * @memberof MtlsOptions
   */
  allowed_certificate_types: CertificateTypes;
  /**
   * If set to true, will validates whether the certificate is intended for authentication
   * @type {boolean}
   * @memberof MtlsOptions
   */
  validate_certificate_use: boolean;
  /**
   * If set to true, will verify the certificate\'s validity period
   * @type {boolean}
   * @memberof MtlsOptions
   */
  validate_validity_period: boolean;
  /**
   * Specifies the type of revocation check.
   * @type {X509RevocationMode}
   * @memberof MtlsOptions
   */
  revocation_mode: X509RevocationMode;
}
