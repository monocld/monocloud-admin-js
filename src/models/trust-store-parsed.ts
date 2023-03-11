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
   * @type {TrustStoreCertificateParsed[]}
   * @memberof TrustStoreParsed
   */
  certificates: TrustStoreCertificateParsed[];
  /**
   * List of certificate revocations.
   * @type {TrustStoreRevocationParsed[]}
   * @memberof TrustStoreParsed
   */
  revocations: TrustStoreRevocationParsed[];
  /**
   * List of banned certificate thumbprints.
   * @type {string[]}
   * @memberof TrustStoreParsed
   */
  banned_thumbprints: string[];
}
