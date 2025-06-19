/**
 *
 * @export
 * @enum {string}
 */

export const X509RevocationFlag = {
  /**
   * Only the end certificate is checked for revocation
   */
  EndCertificateOnly: 'end_certificate_only',
  /**
   * The entire chain of certificates is checked for revocation
   */
  EntireChain: 'entire_chain',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type X509RevocationFlag =
  (typeof X509RevocationFlag)[keyof typeof X509RevocationFlag];
