/**
 * The Log Request Metadata response class.
 * @export
 * @interface LogRequestMetadata
 */
export interface LogRequestMetadata {
  /**
   * The region of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  region?: string | null;
  /**
   * The region code of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  region_code?: string | null;
  /**
   * The city of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  city?: string | null;
  /**
   * The country of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  country?: string | null;
  /**
   * The continent of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  continent?: string | null;
  /**
   * The latitude of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  latitude?: string | null;
  /**
   * The longitude of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  longitude?: string | null;
  /**
   * The time zone of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  time_zone?: string | null;
  /**
   * The zip code of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  zip_code?: string | null;
  /**
   * The remote ip address of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  remote_ip_address: string;
  /**
   * The user agent of the request.
   * @type {string}
   * @memberof LogRequestMetadata
   */
  user_agent: string;
}
