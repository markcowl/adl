import { OperationProperties } from './OperationProperties';
/** @since 2019-09-01 */
export interface Operation {
    /** @since 2019-09-01 */
    name: string;
    /** @since 2019-09-01 */
    display: {
        /** @since 2019-09-01 */
        provider: string;
        /** @since 2019-09-01 */
        resource: string;
        /** @since 2019-09-01 */
        operation: string;
        /** @since 2019-09-01 */
        description: string;
    };
    /** @since 2019-09-01 */
    origin: string;
    /** @since 2019-09-01 */
    properties: OperationProperties;
}
