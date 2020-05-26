import { UserEntityBaseParameters } from './UserEntityBaseParameters';
import { GroupContractProperties } from './GroupContractProperties';
/** @since 2019-12-01 */
export interface UserContractProperties extends UserEntityBaseParameters {
    /** @since 2019-12-01 */
    firstName: string;
    /** @since 2019-12-01 */
    lastName: string;
    /** @since 2019-12-01 */
    email: string;
    /** @since 2019-12-01 */
    registrationDate: dateTime;
    /** @since 2019-12-01 */
    readonly groups: Array<GroupContractProperties> & ;
}
