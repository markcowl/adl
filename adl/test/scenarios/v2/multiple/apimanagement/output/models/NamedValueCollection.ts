import { NamedValueContract } from './NamedValueContract';
/**
 * @description Paged NamedValue list representation.
 */
export interface NamedValueCollection {
    /**
     * @description Page values.
     */
    value: Array<NamedValueContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
