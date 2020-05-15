import { object_188 } from '../anonymous';
/**
 * 
 * @description API Export result.
 */
export interface ApiExportResult {
    /**
     * 
     * @description ResourceId of the API which was exported.
     */
    id: any;
    /**
     * 
     * @description Format in which the Api Details are exported to the Storage Blob with Sas Key valid for 5 minutes.
     * @clientName ExportResultFormat
     */
    format: ExportResultFormat;
    /**
     * 
     * @description The object defining the schema of the exported Api Detail
     */
    value: object_188;
}
