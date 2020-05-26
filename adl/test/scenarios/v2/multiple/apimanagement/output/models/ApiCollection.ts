import { ApiContract } from './ApiContract';
/** @since 2019-12-01 */
export interface ApiCollection {
    /** @since 2019-12-01 */
    readonly value: Array<ApiContract> & ;
    /** @since 2019-12-01 */
    readonly nextLink: string & ;
}
