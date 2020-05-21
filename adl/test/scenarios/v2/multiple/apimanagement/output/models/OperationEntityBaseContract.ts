import { ParameterContract } from './ParameterContract';
import { RequestContract } from './RequestContract';
import { ResponseContract } from './ResponseContract';
/**
 * @description Api Operation Entity Base Contract details.
 */
export interface OperationEntityBaseContract {
    /**
     * @description Collection of URL template parameters.
     */
    templateParameters: Array<ParameterContract>;
    /**
     * @description Description of the operation. May include HTML formatting tags.
     */
    description: string & MaxLength<1000>;
    /**
     * @description An entity containing request details.
     */
    request: RequestContract;
    /**
     * @description Array of Operation responses.
     */
    responses: Array<ResponseContract>;
    /**
     * @description Operation Policies
     */
    policies: string;
}
