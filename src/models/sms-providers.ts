/**
 *
 * @export
 * @enum {string}
 */

export const SmsProviders = {
  /**
   * MonoCloud
   */
  Monocloud: 'monocloud',
  /**
   * Twilio
   */
  Twilio: 'twilio',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SmsProviders = (typeof SmsProviders)[keyof typeof SmsProviders];
