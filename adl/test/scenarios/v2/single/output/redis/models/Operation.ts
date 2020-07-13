
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
        /**
         * @description Friendly name of the resource provider
         * @since 2018-03-01
         */
        provider?: string;
        /**
         * @description Operation type: read, write, delete, listKeys/action, etc.
         * @since 2018-03-01
         */
        operation?: string;
        /**
         * @description Resource type on which the operation is performed.
         * @since 2018-03-01
         */
        resource?: string;
        /**
         * @description Friendly name of the operation
         * @since 2018-03-01
         */
        description?: string;
    };
}
