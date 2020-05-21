import { ParameterContract } from './ParameterContract';
import { RepresentationContract } from './RepresentationContract';
/**
 * @description Operation request details.
 */
export interface RequestContract {
    /**
     * @description Operation request description.
     */
    description: string;
    /**
     * @description Collection of operation request query parameters.
     */
    queryParameters: Array<ParameterContract>;
    /**
     * @description Collection of operation request headers.
     */
    headers: Array<ParameterContract>;
    /**
     * @description Collection of operation request representations.
     */
    representations: Array<RepresentationContract>;
}
