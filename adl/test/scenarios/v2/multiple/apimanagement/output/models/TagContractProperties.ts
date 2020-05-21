
/**
 * @description Tag contract Properties.
 */
export interface TagContractProperties {
    /**
     * @description Tag name.
     */
    displayName?: string & MaxLength<160> & MinLength<1>;
}
