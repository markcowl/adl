import { ApiContractProperties } from './ApiContractProperties';
/** @since 2019-12-01 */
export interface ApiCreateOrUpdateProperties extends ApiContractProperties {
    /** @since 2019-12-01 */
    value: string;
    /** @since 2019-12-01 */
    format: ContentFormat;
    /** @since 2019-12-01 */
    wsdlSelector: {
        /** @since 2019-12-01 */
        wsdlServiceName: string;
        /** @since 2019-12-01 */
        wsdlEndpointName: string;
    };
    /** @since 2019-12-01 */
    apiType: SoapApiType;
}
