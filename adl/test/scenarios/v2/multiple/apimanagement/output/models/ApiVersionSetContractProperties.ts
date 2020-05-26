import { ApiVersionSetEntityBase } from './ApiVersionSetEntityBase';
/** @since 2019-12-01 */
export interface ApiVersionSetContractProperties extends ApiVersionSetEntityBase {
    /** @since 2019-12-01 */
    displayName?: string & MaxLength<100> & MinLength<1>;
    /** @since 2019-12-01 */
    versioningScheme?: versioningScheme;
}
