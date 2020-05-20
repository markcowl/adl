import { UserEntityBaseParameters } from './UserEntityBaseParameters';
/**
 * @description User profile.
 */
export interface UserContractProperties extends UserEntityBaseParameters {
    /**
     * @description First name.
     */
    firstName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Last name.
     */
    lastName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Email address.
     */
    email: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    registrationDate: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Collection of groups user is part of.
     */
    readonly groups: unknown /*= (not tsschema -- undefinedgroups/undefined ) =*/;
}
