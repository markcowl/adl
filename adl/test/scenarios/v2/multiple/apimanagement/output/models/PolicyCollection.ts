import { PolicyContract } from './PolicyContract';
/**
 * @description The response of the list policy operation.
 */
export interface PolicyCollection {
    /**
     * @description Policy Contract value.
     */
    value: Array<PolicyContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
