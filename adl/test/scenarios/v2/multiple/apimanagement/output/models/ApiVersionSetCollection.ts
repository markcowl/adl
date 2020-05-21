import { ApiVersionSetContract } from './ApiVersionSetContract';
/**
 * @description Paged Api Version Set list representation.
 */
export interface ApiVersionSetCollection {
    /**
     * @description Page values.
     */
    value: Array<ApiVersionSetContract>;
    /**
     * @description Next page link if any.
     */
    nextLink: string;
}
