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
   * @type {Array<TrustStoreCertificate>}
   * @memberof TrustStore
   */
  certificates: Array<TrustStoreCertificate>;
  /**
   * List of certificate revocations.
   * @type {Array<TrustStoreRevocation>}
   * @memberof TrustStore
   */
  revocations: Array<TrustStoreRevocation>;
}
