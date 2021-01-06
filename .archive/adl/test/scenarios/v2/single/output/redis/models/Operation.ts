
/**
 * @description REST API operation
 * @since 2018-03-01
 */
export interface Operation {
    /**
     * @description Operation name: {provider}/{resource}/{operation}
     * @since 2018-03-01
     */
    name?: string;
    /**
     * @description The object that describes the operation.
     * @since 2018-03-01
     */
    display?: {
        provider?: string;
        operation?: string;
        resource?: string;
        description?: string;
    };
}
