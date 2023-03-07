import { CreateTrustStoreRevocationRequest } from './create-trust-store-revocation-request';

/**
 * Add Revocations Request.
 * @export
 * @interface AddTrustStoreRevocationsRequest
 */
export interface AddTrustStoreRevocationsRequest {
  /**
   * List of certificate revocations.
   * @type {CreateTrustStoreRevocationRequest[]}
   * @memberof AddTrustStoreRevocationsRequest
   */
  revocations: CreateTrustStoreRevocationRequest[];
}
