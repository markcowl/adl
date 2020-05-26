import { AuthenticationSettingsContract } from './AuthenticationSettingsContract';
import { SubscriptionKeyParameterNamesContract } from './SubscriptionKeyParameterNamesContract';
/** @since 2019-12-01 */
export interface ApiEntityBaseContract {
    /** @since 2019-12-01 */
    description: string;
    /** @since 2019-12-01 */
    authenticationSettings: AuthenticationSettingsContract;
    /** @since 2019-12-01 */
    subscriptionKeyParameterNames: SubscriptionKeyParameterNamesContract;
    /** @since 2019-12-01 */
    type: ApiType;
    /** @since 2019-12-01 */
    apiRevision: string & MaxLength<100> & MinLength<1>;
    /** @since 2019-12-01 */
    apiVersion: string & MaxLength<100>;
    /** @since 2019-12-01 */
    isCurrent: boolean;
    /** @since 2019-12-01 */
    readonly isOnline: boolean & ;
    /** @since 2019-12-01 */
    apiRevisionDescription: string & MaxLength<256>;
    /** @since 2019-12-01 */
    apiVersionDescription: string & MaxLength<256>;
    /** @since 2019-12-01 */
    apiVersionSetId: string;
    /** @since 2019-12-01 */
    subscriptionRequired: boolean;
}
