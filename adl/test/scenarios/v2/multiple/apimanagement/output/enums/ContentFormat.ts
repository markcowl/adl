
/**
 * Content format
 * @since 2019-12-01
 */
export enum ContentFormat {
    /** The contents are inline and Content type is a WADL document. */
    'wadl-xml' = 'wadl-xml',
    /** The WADL document is hosted on a publicly accessible internet address. */
    'wadl-link-json' = 'wadl-link-json',
    /** The contents are inline and Content Type is a OpenApi 2.0 Document. */
    'swagger-json' = 'swagger-json',
    /** The Open Api 2.0 document is hosted on a publicly accessible internet address. */
    'swagger-link-json' = 'swagger-link-json',
    /** The contents are inline and the document is a WSDL/Soap document. */
    wsdl = 'wsdl',
    /** The WSDL document is hosted on a publicly accessible internet address. */
    'wsdl-link' = 'wsdl-link',
    /** The contents are inline and Content Type is a OpenApi 3.0 Document in YAML format. */
    openapi = 'openapi',
    /** The contents are inline and Content Type is a OpenApi 3.0 Document in JSON format. */
    'openapi+json' = 'openapi+json',
    /** The Open Api 3.0 document is hosted on a publicly accessible internet address. */
    'openapi-link' = 'openapi-link',
    /** The Open Api 3.0 Json document is hosted on a publicly accessible internet address. */
    'openapi+json-link' = 'openapi+json-link'
}
