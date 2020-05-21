import { SchemaContract } from './SchemaContract';
/**
 * @description The response of the list schema operation.
 */
export interface SchemaCollection {
    /**
     * @description Api Schema Contract value.
     */
    readonly value: Array<SchemaContract> & ;
    /**
     * @description Next page link if any.
     */
    readonly nextLink: string & ;
}
