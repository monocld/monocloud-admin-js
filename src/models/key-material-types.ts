/**
 * Specifies the type of the key
 * @export
 * @enum {string}
 */

export const KeyMaterialTypes = {
  /**
   *
   */
  X509: 'x509',
  /**
   *
   */
  Jwk: 'jwk',
  /**
   *
   */
  Ecdsa: 'ecdsa',
  /**
   *
   */
  Rsa: 'rsa',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type KeyMaterialTypes =
  (typeof KeyMaterialTypes)[keyof typeof KeyMaterialTypes];
