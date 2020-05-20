import { IdentityProviderType } from '../enums/IdentityProviderType';
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
    signinTenant: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description List of Allowed Tenants when configuring Azure Active Directory login.
     */
    allowedTenants: unknown /*= (not tsschema -- undefinedallowedTenants/undefined ) =*/;
    /**
     * @description OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
     */
    authority: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Signup Policy Name. Only applies to AAD B2C Identity Provider.
     */
    signupPolicyName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Signin Policy Name. Only applies to AAD B2C Identity Provider.
     */
    signinPolicyName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
     */
    profileEditingPolicyName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
     */
    passwordResetPolicyName: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
