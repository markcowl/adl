import { RequestContract } from './RequestContract';
/**
 * @description Api Operation Entity Base Contract details.
 */
export interface OperationEntityBaseContract {
    /**
     * @description Collection of URL template parameters.
     */
    templateParameters: unknown /*= (not tsschema -- undefinedtemplateParameters/undefined ) =*/;
    /**
     * @description Description of the operation. May include HTML formatting tags.
     */
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description An entity containing request details.
     */
    request: RequestContract;
    /**
     * @description Array of Operation responses.
     */
    responses: unknown /*= (not tsschema -- undefinedresponses/undefined ) =*/;
    /**
     * @description Operation Policies
     */
    policies: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
