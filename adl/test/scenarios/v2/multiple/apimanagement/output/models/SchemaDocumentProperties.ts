
/**
 * @description Schema Document Properties.
 */
export interface SchemaDocumentProperties {
    /**
     * @description Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
     */
    value: string;
    /**
     * @description Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
     */
    definitions: {};
}
