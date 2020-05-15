import { RequestContract } from './RequestContract';
/**
 * 
 * @description Api Operation Entity Base Contract details.
 */
export interface OperationEntityBaseContract {
    /**
     * 
     * @description Collection of URL template parameters.
     */
    templateParameters: any;
    /**
     * 
     * @description Description of the operation. May include HTML formatting tags.
     */
    description: any;
    /**
     * 
     * @description An entity containing request details.
     */
    request: RequestContract;
    /**
     * 
     * @description Array of Operation responses.
     */
    responses: any;
    /**
     * 
     * @description Operation Policies
     */
    policies: any;
}
