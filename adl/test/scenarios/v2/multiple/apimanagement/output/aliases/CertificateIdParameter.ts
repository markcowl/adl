
/** Identifier of the certificate entity. Must be unique in the current API Management service instance. */
export type CertificateIdParameter = Path<string & MaxLength<80> & MinLength<1> & RegularExpression<"^[^*#&+:<>?]+$">, "certificateId">;
