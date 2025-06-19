/**
 *
 * @export
 * @enum {string}
 */

export const X509RevocationMode = {
  /**
   * Will not check for revocation.
   */
  NoCheck: 'no_check',
  /**
   * Will check for revocation with root CA and intermediary CAs
   */
  Online: 'online',
  /**
   * Will check for revocation against the customer generated revocation list
   */
  Offline: 'offline',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type X509RevocationMode =
  (typeof X509RevocationMode)[keyof typeof X509RevocationMode];
