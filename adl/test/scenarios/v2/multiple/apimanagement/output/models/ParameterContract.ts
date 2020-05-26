
/** @since 2019-12-01 */
export interface ParameterContract {
    /** @since 2019-12-01 */
    name?: string;
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    type?: string;
    /** @since 2019-12-01 */
    defaultValue: string;
    /** @since 2019-12-01 */
    required: boolean;
    /** @since 2019-12-01 */
    values: Array<string>;
}
