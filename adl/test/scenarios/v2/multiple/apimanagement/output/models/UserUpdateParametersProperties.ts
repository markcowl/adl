import { UserEntityBaseParameters } from './UserEntityBaseParameters';
/**
 * @description Parameters supplied to the Update User operation.
 */
export interface UserUpdateParametersProperties extends UserEntityBaseParameters {
    /**
     * @description Email address. Must not be empty and must be unique within the service instance.
     */
    email: any;
    /**
     * @description User Password.
     */
    password: any;
    /**
     * @description First name.
     */
    firstName: any;
    /**
     * @description Last name.
     */
    lastName: any;
}
