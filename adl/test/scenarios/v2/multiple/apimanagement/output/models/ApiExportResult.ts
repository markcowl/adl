import { ExportResultFormat } from '../enums/ExportResultFormat';
import { object_176 } from './object_176';
/**
 * @description API Export result.
 */
export interface ApiExportResult {
    /**
     * @description ResourceId of the API which was exported.
     */
    id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Format in which the Api Details are exported to the Storage Blob with Sas Key valid for 5 minutes.
     * @clientName ExportResultFormat
     */
    format: ExportResultFormat;
    /**
     * @description The object defining the schema of the exported Api Detail
     */
    value: object_176;
}
