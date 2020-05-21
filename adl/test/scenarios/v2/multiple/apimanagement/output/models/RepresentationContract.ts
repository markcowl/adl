import { ParameterContract } from './ParameterContract';
/**
 * @description Operation request/response representation details.
 */
export interface RepresentationContract {
    /**
     * @description Specifies a registered or custom content type for this representation, e.g. application/xml.
     */
    contentType?: string;
    /**
     * @description An example of the representation.
     */
    sample: string;
    /**
     * @description Schema identifier. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
     */
    schemaId: string;
    /**
     * @description Type name defined by the schema. Applicable only if 'contentType' value is neither 'application/x-www-form-urlencoded' nor 'multipart/form-data'.
     */
    typeName: string;
    /**
     * @description Collection of form parameters. Required if 'contentType' value is either 'application/x-www-form-urlencoded' or 'multipart/form-data'..
     */
    formParameters: Array<ParameterContract>;
}
