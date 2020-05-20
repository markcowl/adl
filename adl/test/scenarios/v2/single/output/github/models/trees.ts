export interface trees {
    base_tree: string;
    /**
     * @description SHA1 checksum ID of the object in the tree.
     */
    sha: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    tree: unknown /*= (not tsschema -- undefinedtree/undefined ) =*/;
    url: string;
}
