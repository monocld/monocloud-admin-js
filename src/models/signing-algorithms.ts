/**
 *
 * @export
 * @enum {string}
 */

export const SigningAlgorithms = {
  /**
   *
   */
  Rs256: 'rs_256',
  /**
   *
   */
  Rs384: 'rs_384',
  /**
   *
   */
  Rs512: 'rs_512',
  /**
   *
   */
  Ps256: 'ps_256',
  /**
   *
   */
  Ps384: 'ps_384',
  /**
   *
   */
  Ps512: 'ps_512',
  /**
   *
   */
  Es256: 'es_256',
  /**
   *
   */
  Es384: 'es_384',
  /**
   *
   */
  Es512: 'es_512',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SigningAlgorithms =
  (typeof SigningAlgorithms)[keyof typeof SigningAlgorithms];
