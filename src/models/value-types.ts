/**
 *
 * @export
 * @enum {string}
 */

export const ValueTypes = {
  /**
   *
   */
  String: 'string',
  /**
   *
   */
  Email: 'email',
  /**
   *
   */
  Phone: 'phone',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ValueTypes = (typeof ValueTypes)[keyof typeof ValueTypes];
