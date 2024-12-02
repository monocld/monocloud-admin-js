/**
 * The Log Location response
 * @export
 * @interface LogLocation
 */
export interface LogLocation {
  /**
   * The region of the request.
   * @type {string}
   * @memberof LogLocation
   */
  region?: string | null;
  /**
   * The region code of the request.
   * @type {string}
   * @memberof LogLocation
   */
  region_code?: string | null;
  /**
   * The city of the request.
   * @type {string}
   * @memberof LogLocation
   */
  city?: string | null;
  /**
   * The country of the request.
   * @type {string}
   * @memberof LogLocation
   */
  country?: string | null;
  /**
   * The continent of the request.
   * @type {string}
   * @memberof LogLocation
   */
  continent?: string | null;
  /**
   * The latitude of the request.
   * @type {string}
   * @memberof LogLocation
   */
  latitude?: string | null;
  /**
   * The longitude of the request.
   * @type {string}
   * @memberof LogLocation
   */
  longitude?: string | null;
  /**
   * The time zone of the request.
   * @type {string}
   * @memberof LogLocation
   */
  time_zone?: string | null;
  /**
   * The zip code of the request.
   * @type {string}
   * @memberof LogLocation
   */
  zip_code?: string | null;
}
