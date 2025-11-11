/**
 *
 * @export
 * @enum {string}
 */

export const BannedCertificateType = {
  /**
   *
   */
  Thumbprint: 'thumbprint',
  /**
   *
   */
  SerialNumber: 'serial_number',
  /**
   *
   */
  Subject: 'subject',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type BannedCertificateType =
  (typeof BannedCertificateType)[keyof typeof BannedCertificateType];
