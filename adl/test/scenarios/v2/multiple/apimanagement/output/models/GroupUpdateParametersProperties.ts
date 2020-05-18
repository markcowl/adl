
/**
 * @description Parameters supplied to the Update Group operation.
 */
export interface GroupUpdateParametersProperties {
    /**
     * @description Group name.
     */
    displayName: any;
    /**
     * @description Group description.
     */
    description: any;
    /**
     * @description Group type.
     */
    type: GroupType;
    /**
     * @description Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
   */
    externalId: any;
}
