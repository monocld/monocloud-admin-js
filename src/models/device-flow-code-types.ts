/**
 *
 * @export
 * @enum {string}
 */

export const DeviceFlowCodeTypes = {
  /**
   *
   */
  Numeric: 'numeric',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type DeviceFlowCodeTypes =
  (typeof DeviceFlowCodeTypes)[keyof typeof DeviceFlowCodeTypes];
