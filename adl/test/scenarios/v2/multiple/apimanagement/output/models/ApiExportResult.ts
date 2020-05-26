
/** @since 2019-12-01 */
export interface ApiExportResult {
    /** @since 2019-12-01 */
    id: string;
    /** @since 2019-12-01 */
    format: ExportResultFormat;
    /** @since 2019-12-01 */
    value: {
        /** @since 2019-12-01 */
        link: string;
    };
}
