
/** @since 2019-12-01 */
export interface ApiVersionSetContractDetails {
    /** @since 2019-12-01 */
    id: string;
    /** @since 2019-12-01 */
    name: string;
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    versioningScheme: "Segment" | "Query" | "Header";
    /** @since 2019-12-01 */
    versionQueryName: string;
    /** @since 2019-12-01 */
    versionHeaderName: string;
}
