import { RevocationCheckDepth } from './revocation-check-depth';
import { X509RevocationMode } from './x509-revocation-mode';

/**
 * Trust Store Options Response
 * @export
 * @interface TrustStoreOptions
 */
export interface TrustStoreOptions {
  /**
   * If set to true, will validate whether the certificate is intended for authentication
   * @type {boolean}
   * @memberof TrustStoreOptions
   */
  validate_certificate_use: boolean;
  /**
   * If set to true, will verify the certificate\'s validity period
   * @type {boolean}
   * @memberof TrustStoreOptions
   */
  validate_validity_period: boolean;
  /**
   * Specifies the type of revocation check.
   * @type {X509RevocationMode}
   * @memberof TrustStoreOptions
   */
  revocation_mode: X509RevocationMode;
  /**
   * Specifies which X509 certificate in the chain should be checked for revocation.
   * @type {RevocationCheckDepth}
   * @memberof TrustStoreOptions
   */
  revocation_check_depth: RevocationCheckDepth;
  /**
   * Specifies the skew in seconds for the CRL issued date and OCSP validation.
   * @type {number}
   * @memberof TrustStoreOptions
   */
  revocation_check_clock_skew: number;
  /**
   * Specifies the timeout in seconds for the OCSP responder to respond to the request.
   * @type {number}
   * @memberof TrustStoreOptions
   */
  ocsp_check_timeout: number;
  /**
   * Specifies the timeout in seconds for the Certificate Distribution Point to respond to the request.
   * @type {number}
   * @memberof TrustStoreOptions
   */
  online_crl_check_timeout: number;
  /**
   * Specifies the cache duration in seconds for the Certificate Authentication.
   * @type {number}
   * @memberof TrustStoreOptions
   */
  certificate_auth_cache_duration: number;
  /**
   * Specifies the cache duration in seconds for the downloaded CRL.
   * @type {number}
   * @memberof TrustStoreOptions
   */
  online_crl_cache_duration: number;
  /**
   * Specifies the cache duration in seconds for the OCSP response.
   * @type {number}
   * @memberof TrustStoreOptions
   */
  ocsp_cache_duration: number;
}
