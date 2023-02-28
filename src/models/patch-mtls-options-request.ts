import { CertificateTypes } from './certificate-types';
import { X509RevocationMode } from './x509-revocation-mode';

/**
 * The Patch Mtls Options Request class
 * @export
 * @interface PatchMtlsOptionsRequest
 */
export interface PatchMtlsOptionsRequest {
  /**
   * Enable MTLS
   * @type {boolean}
   * @memberof PatchMtlsOptionsRequest
   */
  enabled?: boolean;
  /**
   * Specifies the permitted certificate types.
   * @type {CertificateTypes}
   * @memberof PatchMtlsOptionsRequest
   */
  allowed_certificate_types?: CertificateTypes;
  /**
   * If set to true, will validates whether the certificate is intended for authentication
   * @type {boolean}
   * @memberof PatchMtlsOptionsRequest
   */
  validate_certificate_use?: boolean;
  /**
   * If set to true, will verify the certificate\'s validity period
   * @type {boolean}
   * @memberof PatchMtlsOptionsRequest
   */
  validate_validity_period?: boolean;
  /**
   * Specifies the type of revocation check.
   * @type {X509RevocationMode}
   * @memberof PatchMtlsOptionsRequest
   */
  revocation_mode?: X509RevocationMode;
}
