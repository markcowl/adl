import { ApiReleaseContract } from './ApiReleaseContract';
/**
 * @description Paged ApiRelease list representation.
 */
export interface ApiReleaseCollection {
    /**
     * @description Page values.
     */
    readonly value: Array<ApiReleaseContract> & ;
    /**
     * @description Next page link if any.
     */
    readonly nextLink: string & ;
}
