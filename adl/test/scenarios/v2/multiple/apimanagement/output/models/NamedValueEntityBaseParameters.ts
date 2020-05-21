
/**
 * @description NamedValue Entity Base Parameters set.
 */
export interface NamedValueEntityBaseParameters {
    /**
     * @description Optional tags that when provided can be used to filter the NamedValue list.
     */
    tags: Array<string> & MaximumElements<32>;
    /**
     * @description Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    secret: boolean;
}
