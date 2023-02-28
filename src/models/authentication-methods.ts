/**
 *
 * @export
 * @enum {string}
 */

export const AuthenticationMethods = {
  /**
   *
   */
  Password: 'password',
  /**
   *
   */
  EmailCode: 'email_code',
  /**
   *
   */
  MagicLink: 'magic_link',
  /**
   *
   */
  SmsCode: 'sms_code',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AuthenticationMethods =
  (typeof AuthenticationMethods)[keyof typeof AuthenticationMethods];
