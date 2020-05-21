import { tree } from './tree';
import { tree } from './tree';
export interface trees {
    base_tree: string;
    /**
     * @description SHA1 checksum ID of the object in the tree.
     */
    sha: string;
    tree: Array<tree>;
    url: string;
}
