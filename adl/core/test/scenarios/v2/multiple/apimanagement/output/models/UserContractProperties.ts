import { UserEntityBaseParameters } from './UserEntityBaseParameters';
/**
 * 
 * @description User profile.
 */
export interface UserContractProperties extends UserEntityBaseParameters {
    /**
     * 
     * @description First name.
     */
    firstName: any;
    /**
     * 
     * @description Last name.
     */
    lastName: any;
    /**
     * 
     * @description Email address.
     */
    email: any;
    /**
     * 
     * @description Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    registrationDate: any;
    /**
     * 
     * @description Collection of groups user is part of.
     */
    readonly groups: any;
}
