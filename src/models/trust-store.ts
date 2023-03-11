import { TrustStoreCertificate } from './trust-store-certificate';
import { TrustStoreRevocation } from './trust-store-revocation';

/**
 * Trust Store Response
 * @export
 * @interface TrustStore
 */
export interface TrustStore {
  /**
   * List of certificates.
   * @type {TrustStoreCertificate[]}
   * @memberof TrustStore
   */
  certificates: TrustStoreCertificate[];
  /**
   * List of certificate revocations.
   * @type {TrustStoreRevocation[]}
   * @memberof TrustStore
   */
  revocations: TrustStoreRevocation[];
  /**
   * List of banned certificate thumbprints.
   * @type {string[]}
   * @memberof TrustStore
   */
  banned_thumbprints: string[];
}
