/**
 * Specifies the purpose / use of the key
 * @export
 * @enum {string}
 */

export const KeyMaterialUses = {
  /**
   * The key can be used for signing new tokens.
   */
  Signing: 'signing',
  /**
   * The key can be used for validating the tokens.
   */
  Validation: 'validation',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type KeyMaterialUses =
  (typeof KeyMaterialUses)[keyof typeof KeyMaterialUses];
