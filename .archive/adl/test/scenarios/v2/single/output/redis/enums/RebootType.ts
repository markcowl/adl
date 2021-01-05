
/**
 * @extensible
 * @description Which Redis node(s) to reboot. Depending on this value data loss is possible.
 * @since 2018-03-01
 */
export enum RebootType {
    PrimaryNode = "PrimaryNode",
    SecondaryNode = "SecondaryNode",
    AllNodes = "AllNodes"
}
