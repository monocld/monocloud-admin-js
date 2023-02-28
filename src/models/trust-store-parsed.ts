import { TrustStoreCertificateParsed } from './trust-store-certificate-parsed';
import { TrustStoreRevocationParsed } from './trust-store-revocation-parsed';

/**
 * Trust Store Parsed Response
 * @export
 * @interface TrustStoreParsed
 */
export interface TrustStoreParsed {
  /**
   * List of certificates.
   * @type {Array<TrustStoreCertificateParsed>}
   * @memberof TrustStoreParsed
   */
  certificates: Array<TrustStoreCertificateParsed>;
  /**
   * List of certificate revocations.
   * @type {Array<TrustStoreRevocationParsed>}
   * @memberof TrustStoreParsed
   */
  revocations: Array<TrustStoreRevocationParsed>;
}
