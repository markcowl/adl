import { NamedValueContract } from './NamedValueContract';
/** @since 2019-12-01 */
export interface NamedValueCollection {
    /** @since 2019-12-01 */
    value: Array<NamedValueContract>;
    /** @since 2019-12-01 */
    nextLink: string;
}
