
/**
 * @description Parameters for Redis export operation.
 * @since 2018-03-01
 */
export interface ExportRDBParameters {
    /**
     * @description File format.
     * @since 2018-03-01
     */
    format?: string;
    /**
     * @description Prefix to use for exported files.
     * @since 2018-03-01
     */
    prefix: string;
    /**
     * @description Container name to export to.
     * @since 2018-03-01
     */
    container: string;
}
