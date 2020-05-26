
/**
 * ListApplicationsRequest
 * @since 2018-11-25
 */
export interface ListApplicationsRequest {
    /** @since 2018-11-25 */
    MaxResults: int64 & Minimum<1> & Maximum<40>;
    /** @since 2018-11-25 */
    NextToken: string;
}
