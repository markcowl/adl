import { ApiRevisionContract } from './ApiRevisionContract';
/**
 * @description Paged Api Revision list representation.
 */
export interface ApiRevisionCollection {
    /**
     * @description Page values.
     */
    readonly value: Array<ApiRevisionContract> & ;
    /**
     * @description Next page link if any.
     */
    readonly nextLink: string & ;
}
