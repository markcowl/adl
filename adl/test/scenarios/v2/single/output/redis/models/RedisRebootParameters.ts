import { RebootType } from "../enums/RebootType";
/**
 * @description Specifies which Redis node(s) to reboot.
 * @since 2018-03-01
 */
export interface RedisRebootParameters {
    /**
     * @description Which Redis node(s) to reboot. Depending on this value data loss is possible.
     * @since 2018-03-01
     */
    rebootType: RebootType;
    /**
     * @description If clustering is enabled, the ID of the shard to be rebooted.
     * @since 2018-03-01
     */
    shardId?: int32;
}
