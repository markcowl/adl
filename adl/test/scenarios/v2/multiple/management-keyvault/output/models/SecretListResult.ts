import { Secret } from './Secret';
/** @since 2019-09-01 */
export interface SecretListResult {
    /** @since 2019-09-01 */
    value: Array<Secret>;
    /** @since 2019-09-01 */
    nextLink: string;
}
