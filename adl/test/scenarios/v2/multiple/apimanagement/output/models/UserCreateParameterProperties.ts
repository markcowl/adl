import { UserEntityBaseParameters } from './UserEntityBaseParameters';
/**
 * @description Parameters supplied to the Create User operation.
 */
export interface UserCreateParameterProperties extends UserEntityBaseParameters {
    /**
     * @description Email address. Must not be empty and must be unique within the service instance.
     */
    email?: string & MaxLength<254> & MinLength<1>;
    /**
     * @description First name.
     */
    firstName?: string & MaxLength<100> & MinLength<1>;
    /**
     * @description Last name.
     */
    lastName?: string & MaxLength<100> & MinLength<1>;
    /**
     * @description User Password. If no value is provided, a default password is generated.
     */
    password: string;
    /**
     * @description Determines the type of application which send the create user request. Default is old publisher portal.
     */
    appType: AppType;
    /**
     * @description Determines the type of confirmation e-mail that will be sent to the newly created user.
     */
    confirmation: Confirmation;
}
