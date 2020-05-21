
/**
 * @description Identity Provider Base Parameter Properties.
 */
export interface IdentityProviderBaseParameters {
    /**
     * @description Identity Provider Type identifier.
     */
    type: IdentityProviderType;
    /**
     * @description The TenantId to use instead of Common when logging into Active Directory
     */
    signinTenant: string;
    /**
     * @description List of Allowed Tenants when configuring Azure Active Directory login.
     */
    allowedTenants: Array<string> & MaximumElements<32>;
    /**
     * @description OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
     */
    authority: string;
    /**
     * @description Signup Policy Name. Only applies to AAD B2C Identity Provider.
     */
    signupPolicyName: string & MinLength<1>;
    /**
     * @description Signin Policy Name. Only applies to AAD B2C Identity Provider.
     */
    signinPolicyName: string & MinLength<1>;
    /**
     * @description Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
     */
    profileEditingPolicyName: string & MinLength<1>;
    /**
     * @description Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
     */
    passwordResetPolicyName: string & MinLength<1>;
}
