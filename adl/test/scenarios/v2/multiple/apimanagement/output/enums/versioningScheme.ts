
/**
 * @extensible
 * @description An value that determines where the API Version identifer will be located in a HTTP request.
 * @since 2019-12-01
 */
export enum versioningScheme {
    /** The API Version is passed in a path segment. */
    Segment = 'Segment',
    /** The API Version is passed in a query parameter. */
    Query = 'Query',
    /** The API Version is passed in a HTTP header. */
    Header = 'Header'
}
