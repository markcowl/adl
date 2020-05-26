
/** @since 2019-12-01 */
export interface OpenidConnectProviderUpdateContractProperties {
    /** @since 2019-12-01 */
    displayName: string & MaxLength<50>;
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    metadataEndpoint: string;
    /** @since 2019-12-01 */
    clientId: string;
    /** @since 2019-12-01 */
    clientSecret: string;
}
