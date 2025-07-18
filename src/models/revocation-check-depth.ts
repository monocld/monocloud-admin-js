/**
 *
 * @export
 * @enum {string}
 */

export const RevocationCheckDepth = {
  /**
   * Only the end certificate is checked for revocation
   */
  EndCertificateOnly: 'end_certificate_only',
  /**
   * The entire chain of certificates, except the root certificate is checked for revocation
   */
  ExcludeRoot: 'exclude_root',
  /**
   * The entire chain of certificates is checked for revocation
   */
  EntireChain: 'entire_chain',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type RevocationCheckDepth =
  (typeof RevocationCheckDepth)[keyof typeof RevocationCheckDepth];
