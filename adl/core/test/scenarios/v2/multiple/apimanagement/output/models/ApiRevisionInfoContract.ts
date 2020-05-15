import { ApiVersionSetContractDetails } from './ApiVersionSetContractDetails';
/**
 * 
 * @description Object used to create an API Revision or Version based on an existing API Revision
 */
export interface ApiRevisionInfoContract {
    /**
     * 
     * @description Resource identifier of API to be used to create the revision from.
     */
    sourceApiId: any;
    /**
     * 
     * @description Version identifier for the new API Version.
     */
    apiVersionName: any;
    /**
     * 
     * @description Description of new API Revision.
     */
    apiRevisionDescription: any;
    /**
     * 
     * @description Version set details
     */
    apiVersionSet: ApiVersionSetContractDetails;
}
