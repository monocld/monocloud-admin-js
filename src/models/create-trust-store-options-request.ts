import { RevocationCheckDepth } from './revocation-check-depth';
import { X509RevocationMode } from './x509-revocation-mode';

/**
 * Create Trust Store Options Request.
 * @export
 * @interface CreateTrustStoreOptionsRequest
 */
export interface CreateTrustStoreOptionsRequest {
  /**
   * If set to true, will validate whether the certificate is intended for authentication
   * @type {boolean}
   * @memberof CreateTrustStoreOptionsRequest
   */
  validate_certificate_use?: boolean;
  /**
   * If set to true, will verify the certificate\'s validity period
   * @type {boolean}
   * @memberof CreateTrustStoreOptionsRequest
   */
  validate_validity_period?: boolean;
  /**
   * Specifies the type of revocation check.
   * @type {X509RevocationMode}
   * @memberof CreateTrustStoreOptionsRequest
   */
  revocation_mode?: X509RevocationMode;
  /**
   * Specifies which X509 certificate in the chain should be checked for revocation.
   * @type {RevocationCheckDepth}
   * @memberof CreateTrustStoreOptionsRequest
   */
  revocation_check_depth?: RevocationCheckDepth;
  /**
   * Specifies the skew in seconds for the CRL issued date and OCSP validation.
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  revocation_check_clock_skew?: number;
  /**
   * Specifies the timeout in seconds for the OCSP responder to respond to the request.
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  ocsp_check_timeout?: number;
  /**
   * Specifies the timeout in seconds for the Certificate Distribution Point to respond to the request.
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  online_crl_check_timeout?: number;
  /**
   * Specifies the cache duration in seconds for the Certificate Authentication.
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  certificate_auth_cache_duration?: number;
  /**
   * Specifies the cache duration in seconds for the downloaded CRL.
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  online_crl_cache_duration?: number;
  /**
   * Specifies the cache duration in seconds for the OCSP response.
   * @type {number}
   * @memberof CreateTrustStoreOptionsRequest
   */
  ocsp_cache_duration?: number;
}
