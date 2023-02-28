/**
 * The Pagination Header response class
 * @export
 * @interface PaginationHeader
 */
export interface PaginationHeader {
  /**
   * Page Size
   * @type {number}
   * @memberof PaginationHeader
   */
  page_size: number;
  /**
   * Current Page
   * @type {number}
   * @memberof PaginationHeader
   */
  current_page: number;
  /**
   * Total Number of Items
   * @type {number}
   * @memberof PaginationHeader
   */
  total_count: number;
  /**
   * Specfies whether there is a previous page
   * @type {boolean}
   * @memberof PaginationHeader
   */
  has_previous: boolean;
  /**
   * Specfies whether there is a next page
   * @type {boolean}
   * @memberof PaginationHeader
   */
  has_next: boolean;
}
