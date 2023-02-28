/**
 *
 * @export
 * @enum {string}
 */

export const CertificateTypes = {
  /**
   * Verifies the certificate with root CA and intermediary CAs
   */
  Chained: 'chained',
  /**
   * Verifies the self-signed certificate in the store against the certificate presented by the user
   */
  SelfSigned: 'self_signed',
  /**
   * Verifies both self-signed and chained certificates
   */
  All: 'all',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type CertificateTypes =
  (typeof CertificateTypes)[keyof typeof CertificateTypes];
