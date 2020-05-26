import { Tag } from './Tag';
/**
 * CreateApplicationRequest
 * @since 2018-11-25
 */
export interface CreateApplicationRequest {
    /** @since 2018-11-25 */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /** @since 2018-11-25 */
    OpsCenterEnabled: boolean;
    /** @since 2018-11-25 */
    CWEMonitorEnabled: boolean;
    /** @since 2018-11-25 */
    OpsItemSNSTopicArn: string & MaxLength<300> & MinLength<20>;
    /** @since 2018-11-25 */
    Tags: Array<Tag> & MaximumElements<200> & MinimumElements<0>;
}
