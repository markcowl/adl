import { SkuName } from '../enums/SkuName';
import { SkuFamily } from '../enums/SkuFamily';
/**
 * @description SKU parameters supplied to the create Redis operation.
 * @since 2018-03-01
 */
export interface Sku {
    /**
     * @description The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
     * @since 2018-03-01
     */
    name: SkuName;
    /**
     * @description The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
     * @since 2018-03-01
     */
    family: SkuFamily;
    /**
     * @description The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
     * @since 2018-03-01
     */
    capacity: int32;
}
