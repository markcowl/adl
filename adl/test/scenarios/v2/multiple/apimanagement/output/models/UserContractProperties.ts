import { GroupContractProperties } from './GroupContractProperties';
import { UserEntityBaseParameters } from './UserEntityBaseParameters';
/**
 * @description User profile.
 */
export interface UserContractProperties extends UserEntityBaseParameters {
    /**
     * @description First name.
     */
    firstName: string;
    /**
     * @description Last name.
     */
    lastName: string;
    /**
     * @description Email address.
     */
    email: string;
    /**
     * @description Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    registrationDate: dateTime;
    /**
     * @description Collection of groups user is part of.
     */
    readonly groups: Array<GroupContractProperties> & ;
}
