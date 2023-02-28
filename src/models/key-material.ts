import { KeyMaterialTypes } from './key-material-types';
import { KeyMaterialUses } from './key-material-uses';
import { SigningAlgorithms } from './signing-algorithms';

/**
 * The KeyMaterial Response class
 * @export
 * @interface KeyMaterial
 */
export interface KeyMaterial {
  /**
   * Unique identifier of the key.
   * @type {string}
   * @memberof KeyMaterial
   */
  id: string;
  /**
   * Specifies the type of algorithm used for signing.
   * @type {SigningAlgorithms}
   * @memberof KeyMaterial
   */
  signing_algorithm: SigningAlgorithms;
  /**
   * Specifies whether the key is current default.
   * @type {boolean}
   * @memberof KeyMaterial
   */
  is_current: boolean;
  /**
   * Specifies whether the key is system generated or not.
   * @type {boolean}
   * @memberof KeyMaterial
   */
  is_system_generated: boolean;
  /**
   * Specifies the current use of the key.
   * @type {KeyMaterialUses}
   * @memberof KeyMaterial
   */
  use: KeyMaterialUses;
  /**
   * Specifies the use for which the key was created.
   * @type {KeyMaterialUses}
   * @memberof KeyMaterial
   */
  original_use: KeyMaterialUses;
  /**
   * Specifies the type of key.
   * @type {KeyMaterialTypes}
   * @memberof KeyMaterial
   */
  key_type: KeyMaterialTypes;
  /**
   * Specifies the creation time of the key (in Epoch).
   * @type {number}
   * @memberof KeyMaterial
   */
  creation_time: number;
  /**
   * Specifies the time ( in Epoch ) from which the key is valid.
   * @type {number}
   * @memberof KeyMaterial
   */
  valid_from: number;
  /**
   * Specifies the time ( in Epoch ) upto which the key is valid.
   * @type {number}
   * @memberof KeyMaterial
   */
  valid_to?: number | null;
  /**
   * Specifies the revocation time of the key ( in Epoch ).
   * @type {number}
   * @memberof KeyMaterial
   */
  revocation_date?: number | null;
  /**
   * Specifies the time ( in Epoch ) at which the key was rotated.
   * @type {number}
   * @memberof KeyMaterial
   */
  rotation_date?: number | null;
}
