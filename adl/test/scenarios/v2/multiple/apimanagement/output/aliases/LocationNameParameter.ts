
/** Location in which the API Management service is deployed. This is one of the Azure Regions like West US, East US, South Central US. */
export type LocationNameParameter = Path<string & MinLength<1>, "locationName">;
