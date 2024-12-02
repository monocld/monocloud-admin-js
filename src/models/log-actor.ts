import { ActorTypes } from './actor-types';

/**
 * The Log Actor response
 * @export
 * @interface LogActor
 */
export interface LogActor {
  /**
   * Indicates the type of actor who performed an action.
   * @type {ActorTypes}
   * @memberof LogActor
   */
  type: ActorTypes;
  /**
   *
   * @type {string}
   * @memberof LogActor
   */
  id?: string | null;
}
