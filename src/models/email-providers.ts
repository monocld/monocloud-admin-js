/**
 *
 * @export
 * @enum {string}
 */

export const EmailProviders = {
  /**
   * MonoCloud
   */
  Monocloud: 'monocloud',
  /**
   * SendGrid
   */
  SendGrid: 'send_grid',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type EmailProviders =
  (typeof EmailProviders)[keyof typeof EmailProviders];
