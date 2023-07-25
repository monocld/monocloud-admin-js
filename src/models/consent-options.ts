/**
 * The Consent Options response class
 * @export
 * @interface ConsentOptions
 */
export interface ConsentOptions {
  /**
   * Since access tokens have finite lifetimes, refresh tokens allow requesting new access tokens without user interaction. The clients need to be explicitly authorized by the User to request for refresh tokens. This option specifies if all the clients need Consent from the User for Offline Access.
   * @type {boolean}
   * @memberof ConsentOptions
   */
  consent_required_for_offline_access: boolean;
}
