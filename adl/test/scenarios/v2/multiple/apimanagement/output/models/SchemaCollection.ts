import { SchemaContract } from './SchemaContract';
/** @since 2019-12-01 */
export interface SchemaCollection {
    /** @since 2019-12-01 */
    readonly value: Array<SchemaContract> & ;
    /** @since 2019-12-01 */
    readonly nextLink: string & ;
}
