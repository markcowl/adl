
/**
 * @description User identity details.
 */
export interface UserIdentityContract {
    /**
     * @description Identity provider name.
     */
    provider: string;
    /**
     * @description Identifier value within provider.
     */
    id: string;
}
