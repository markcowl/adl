import { object_177 } from './object_177';
/**
 * @description Schema Document Properties.
 */
export interface SchemaDocumentProperties {
    /**
     * @description Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
     */
    value: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
     */
    definitions: object_177;
}
