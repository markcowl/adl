import { RedisKeyType } from '../enums/RedisKeyType';
/**
 * @description Specifies which Redis access keys to reset.
 * @since 2018-03-01
 */
export interface RedisRegenerateKeyParameters {
    /**
     * @description The Redis access key to regenerate.
     * @since 2018-03-01
     */
    keyType: RedisKeyType;
}
