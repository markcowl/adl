
/**
 * 
 * @description Group contract Properties.
 */
export interface GroupContractProperties {
    /**
     * 
     * @description Group name.
     */
    displayName?: any;
    /**
     * 
     * @description Group description. Can contain HTML formatting tags.
     */
    description: any;
    /**
     * 
     * @description true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
     */
    readonly builtIn: any;
    /**
     * 
     * @description Group type.
     */
    type: GroupType;
    /**
     * 
     * @description For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
   */
    externalId: any;
}
