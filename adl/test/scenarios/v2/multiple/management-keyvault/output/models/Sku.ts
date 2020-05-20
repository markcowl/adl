import { SkuFamily } from '../enums/SkuFamily';
import { SkuName } from '../enums/SkuName';
/**
 * @description SKU details
 */
export interface Sku {
    /**
     * @description SKU family name
     */
    family?: SkuFamily;
    /**
     * @description SKU name to specify whether the key vault is a standard vault or a premium vault.
     */
    name?: SkuName;
}
