
/**
 * @description Contract defining the Tag property in the Tag Resource Contract
 */
export interface TagTagResourceContractProperties {
    /**
     * @description Tag identifier
     */
    id: string;
    /**
     * @description Tag Name
     */
    name: string & MaxLength<160> & MinLength<1>;
}
