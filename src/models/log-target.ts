import { TargetTypes } from './target-types';

/**
 * The Log Target response
 * @export
 * @interface LogTarget
 */
export interface LogTarget {
  /**
   * The target type
   * @type {TargetTypes}
   * @memberof LogTarget
   */
  type: TargetTypes;
  /**
   * The target id
   * @type {string}
   * @memberof LogTarget
   */
  id?: string | null;
}
