import { UserEntityBaseParameters } from './UserEntityBaseParameters';
/**
 * @description Parameters supplied to the Update User operation.
 */
export interface UserUpdateParametersProperties extends UserEntityBaseParameters {
    /**
     * @description Email address. Must not be empty and must be unique within the service instance.
     */
    email: string & MaxLength<254> & MinLength<1>;
    /**
     * @description User Password.
     */
    password: string;
    /**
     * @description First name.
     */
    firstName: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Last name.
     */
    lastName: string & MaxLength<100> & MinLength<1>;
}
