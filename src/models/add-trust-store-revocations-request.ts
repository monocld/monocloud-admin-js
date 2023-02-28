import { CreateTrustStoreRevocationRequest } from './create-trust-store-revocation-request';

/**
 * Add Revocations Request.
 * @export
 * @interface AddTrustStoreRevocationsRequest
 */
export interface AddTrustStoreRevocationsRequest {
  /**
   * List of certificate revocations.
   * @type {Array<CreateTrustStoreRevocationRequest>}
   * @memberof AddTrustStoreRevocationsRequest
   */
  revocations: Array<CreateTrustStoreRevocationRequest>;
}
