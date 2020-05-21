import { RepresentationContract } from './RepresentationContract';
import { ParameterContract } from './ParameterContract';
/**
 * @description Operation response details.
 */
export interface ResponseContract {
    /**
     * @description Operation response HTTP status code.
     */
    statusCode?: int32;
    /**
     * @description Operation response description.
     */
    description: string;
    /**
     * @description Collection of operation response representations.
     */
    representations: Array<RepresentationContract>;
    /**
     * @description Collection of operation response headers.
     */
    headers: Array<ParameterContract>;
}
