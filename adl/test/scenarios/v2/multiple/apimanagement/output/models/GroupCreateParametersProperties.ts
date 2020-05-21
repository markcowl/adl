
/**
 * @description Parameters supplied to the Create Group operation.
 */
export interface GroupCreateParametersProperties {
    /**
     * @description Group name.
     */
    displayName?: string & MaxLength<300> & MinLength<1>;
    /**
     * @description Group description.
     */
    description: string;
    /**
     * @description Group type.
     */
    type: GroupType;
    /**
     * @description Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
   */
    externalId: string;
}
