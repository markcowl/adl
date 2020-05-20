import { KeyType } from '../enums/KeyType';
/**
 * @description Parameters supplied to the Get User Token operation.
 */
export interface UserTokenParameterProperties {
    /**
     * @description The Key to be used to generate token for user.
     */
    keyType?: KeyType;
    /**
     * @description The Expiry time of the Token. Maximum token expiry time is set to 30 days. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    expiry?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
