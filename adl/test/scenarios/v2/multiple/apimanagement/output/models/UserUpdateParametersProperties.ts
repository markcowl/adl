import { UserEntityBaseParameters } from './UserEntityBaseParameters';
/**
 * @description Parameters supplied to the Update User operation.
 */
export interface UserUpdateParametersProperties extends UserEntityBaseParameters {
    /**
     * @description Email address. Must not be empty and must be unique within the service instance.
     */
    email: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description User Password.
     */
    password: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description First name.
     */
    firstName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Last name.
     */
    lastName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
