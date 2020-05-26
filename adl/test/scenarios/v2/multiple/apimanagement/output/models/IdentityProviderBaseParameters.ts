
/** @since 2019-12-01 */
export interface IdentityProviderBaseParameters {
    /** @since 2019-12-01 */
    type: IdentityProviderType;
    /** @since 2019-12-01 */
    signinTenant: string;
    /** @since 2019-12-01 */
    allowedTenants: Array<string> & MaximumElements<32>;
    /** @since 2019-12-01 */
    authority: string;
    /** @since 2019-12-01 */
    signupPolicyName: string & MinLength<1>;
    /** @since 2019-12-01 */
    signinPolicyName: string & MinLength<1>;
    /** @since 2019-12-01 */
    profileEditingPolicyName: string & MinLength<1>;
    /** @since 2019-12-01 */
    passwordResetPolicyName: string & MinLength<1>;
}
