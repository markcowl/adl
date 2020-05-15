
/**
 * 
 * @description Identity Provider Base Parameter Properties.
 */
export interface IdentityProviderBaseParameters {
    /**
     * 
     * @description Identity Provider Type identifier.
     */
    type: IdentityProviderType;
    /**
     * 
     * @description The TenantId to use instead of Common when logging into Active Directory
     */
    signinTenant: any;
    /**
     * 
     * @description List of Allowed Tenants when configuring Azure Active Directory login.
     */
    allowedTenants: any;
    /**
     * 
     * @description OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
     */
    authority: any;
    /**
     * 
     * @description Signup Policy Name. Only applies to AAD B2C Identity Provider.
     */
    signupPolicyName: any;
    /**
     * 
     * @description Signin Policy Name. Only applies to AAD B2C Identity Provider.
     */
    signinPolicyName: any;
    /**
     * 
     * @description Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
     */
    profileEditingPolicyName: any;
    /**
     * 
     * @description Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
     */
    passwordResetPolicyName: any;
}
