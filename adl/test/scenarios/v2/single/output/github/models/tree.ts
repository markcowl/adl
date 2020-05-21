export interface tree {
    sha: string;
    tree: Array<{
        /**
         * @description One of 100644 for file (blob), 100755 for executable (blob), 040000 for subdirectory (tree), 160000 for submodule (commit) or 120000 for a blob that specifies the path of a symlink.
         */
        mode: enum_311;
        path: string;
        /**
         * @description SHA1 checksum ID of the object in the tree.
         */
        sha: string;
        size: int64;
        type: "blob" | "tree" | "commit";
        url: string;
    }>;
    url: string;
}
