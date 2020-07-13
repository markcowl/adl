
/**
 * @extensible
 * @description Format of the policyContent.
 * @since 2019-12-01
 */
export enum PolicyContentFormat {
    /** The contents are inline and Content type is an XML document. */
    xml = 'xml',
    /** The policy XML document is hosted on a http endpoint accessible from the API Management service. */
    "xml-link" = 'xml-link',
    /** The contents are inline and Content type is a non XML encoded policy document. */
    rawxml = 'rawxml',
    /** The policy document is not Xml encoded and is hosted on a http endpoint accessible from the API Management service. */
    "rawxml-link" = 'rawxml-link'
}
