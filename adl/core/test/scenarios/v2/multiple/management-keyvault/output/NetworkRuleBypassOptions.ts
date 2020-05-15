/** @description Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
 * @extensible
 */
export enum NetworkRuleBypassOptions {
    AzureServices = 'AzureServices',
    None = 'None'
}
