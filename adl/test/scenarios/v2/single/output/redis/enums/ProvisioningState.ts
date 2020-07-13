
/**
 * @extensible
 * @description Redis instance provisioning status.
 * @since 2018-03-01
 */
export enum ProvisioningState {
    Creating = "Creating",
    Deleting = "Deleting",
    Disabled = "Disabled",
    Failed = "Failed",
    Linking = "Linking",
    Provisioning = "Provisioning",
    RecoveringScaleFailure = "RecoveringScaleFailure",
    Scaling = "Scaling",
    Succeeded = "Succeeded",
    Unlinking = "Unlinking",
    Unprovisioning = "Unprovisioning",
    Updating = "Updating"
}
