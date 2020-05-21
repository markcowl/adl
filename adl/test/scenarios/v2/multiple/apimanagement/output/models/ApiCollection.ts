import { ApiContract } from './ApiContract';
/**
 * @description Paged Api list representation.
 */
export interface ApiCollection {
    /**
     * @description Page values.
     */
    readonly value: Array<ApiContract> & ;
    /**
     * @description Next page link if any.
     */
    readonly nextLink: string & ;
}
