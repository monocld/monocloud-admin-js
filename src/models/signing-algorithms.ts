/**
 *
 * @export
 * @enum {string}
 */

export const SigningAlgorithms = {
  /**
   *
   */
  Rs256: 'rs256',
  /**
   *
   */
  Rs384: 'rs384',
  /**
   *
   */
  Rs512: 'rs512',
  /**
   *
   */
  Ps256: 'ps256',
  /**
   *
   */
  Ps384: 'ps384',
  /**
   *
   */
  Ps512: 'ps512',
  /**
   *
   */
  Es256: 'es256',
  /**
   *
   */
  Es384: 'es384',
  /**
   *
   */
  Es512: 'es512',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SigningAlgorithms =
  (typeof SigningAlgorithms)[keyof typeof SigningAlgorithms];
