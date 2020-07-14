import { TokenRequest } from "./TokenRequest";
/**
 *
 * @since 1.1.0
 */
export interface SignedTokenRequest extends TokenRequest, {
    mac: string
} {
}
