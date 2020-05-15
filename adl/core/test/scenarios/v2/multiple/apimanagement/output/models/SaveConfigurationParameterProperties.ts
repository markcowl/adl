
/**
 * 
 * @description Parameters supplied to the Save Tenant Configuration operation.
 */
export interface SaveConfigurationParameterProperties {
    /**
     * 
     * @description The name of the Git branch in which to commit the current configuration snapshot.
     */
    branch?: any;
    /**
     * 
     * @description The value if true, the current configuration database is committed to the Git repository, even if the Git repository has newer changes that would be overwritten.
     */
    force: any;
}
