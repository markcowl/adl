import { Operation } from './Operation';
/**
 * @description Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next set of results.
 * @since 2018-03-01
 */
export interface OperationListResult {
    /**
     * @description List of operations supported by the resource provider.
     * @since 2018-03-01
     */
    value?: Array<Operation>;
    /**
     * @description URL to get the next set of operation list results if there are any.
     * @since 2018-03-01
     */
    readonly nextLink?: string;
}
