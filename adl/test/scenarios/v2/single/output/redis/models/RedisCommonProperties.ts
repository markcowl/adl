import { TlsVersion } from "../enums/TlsVersion";
/**
 * @description Create/Update/Get common properties of the redis cache.
 * @since 2018-03-01
 */
export interface RedisCommonProperties {
    /**
     * @description All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
     * @since 2018-03-01
     */
    redisConfiguration?: Dictionary<string>;
    /**
     * @description Specifies whether the non-ssl Redis server port (6379) is enabled.
     * @since 2018-03-01
     */
    enableNonSslPort?: boolean;
    /**
     * @description A dictionary of tenant settings
     * @since 2018-03-01
     */
    tenantSettings?: Dictionary<string>;
    /**
     * @description The number of shards to be created on a Premium Cluster Cache.
     * @since 2018-03-01
     */
    shardCount?: int32;
    /**
     * @description Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
     * @since 2018-03-01
     */
    minimumTlsVersion?: TlsVersion;
}
