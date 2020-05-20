import { ExportResultFormat } from '../ExportResultFormat';
/**
 * @description API Export result.
 */
export interface ApiExportResult {
    /**
     * @description ResourceId of the API which was exported.
     */
    id: any;
    /**
     * @description Format in which the Api Details are exported to the Storage Blob with Sas Key valid for 5 minutes.
     * @clientName ExportResultFormat
     */
    format: ExportResultFormat;
    /**
     * @description The object defining the schema of the exported Api Detail
     */
    value: {
        /**
         * @description Link to the Storage Blob containing the result of the export operation. The Blob Uri is only valid for 5 minutes.
         */
        link: any;
    };
}
