
/**
 * @description Parameters for Redis import operation.
 * @since 2018-03-01
 */
export interface ImportRDBParameters {
    /**
     * @description File format.
     * @since 2018-03-01
     */
    format?: string;
    /**
     * @description files to import.
     * @since 2018-03-01
     */
    files: Array<string>;
}
