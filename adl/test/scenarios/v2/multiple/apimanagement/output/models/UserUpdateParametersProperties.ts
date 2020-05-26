import { UserEntityBaseParameters } from './UserEntityBaseParameters';
/** @since 2019-12-01 */
export interface UserUpdateParametersProperties extends UserEntityBaseParameters {
    /** @since 2019-12-01 */
    email: string & MaxLength<254> & MinLength<1>;
    /** @since 2019-12-01 */
    password: string;
    /** @since 2019-12-01 */
    firstName: string & MaxLength<100> & MinLength<1>;
    /** @since 2019-12-01 */
    lastName: string & MaxLength<100> & MinLength<1>;
}
