export interface object_186 {
    /**
     * @description One of 100644 for file (blob), 100755 for executable (blob), 040000 for subdirectory (tree), 160000 for submodule (commit) or 120000 for a blob that specifies the path of a symlink.
     */
    mode: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    path: string;
    /**
     * @description SHA1 checksum ID of the object in the tree.
     */
    sha: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    size: int64;
    type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
}
