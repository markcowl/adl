import { Secret } from './Secret';
/**
 * @description List of secrets
 */
export interface SecretListResult {
    /**
     * @description The list of secrets.
     */
    value: Array<Secret>;
    /**
     * @description The URL to get the next set of secrets.
     */
    nextLink: string;
}
