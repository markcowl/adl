
/**
 * @description Parameters supplied to the Deploy Configuration operation.
 */
export interface DeployConfigurationParameterProperties {
    /**
     * @description The name of the Git branch from which the configuration is to be deployed to the configuration database.
     */
    branch?: string;
    /**
     * @description The value enforcing deleting subscriptions to products that are deleted in this update.
     */
    force: boolean;
}
