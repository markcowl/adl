import { object_25 } from './object_25';
export interface compare_commits {
    ahead_by: int64;
    base_commit: object_25;
    behind_by: int64;
    commits: unknown /*= (not tsschema -- undefinedcommits/undefined ) =*/;
    diff_url: string;
    files: array;
    html_url: string;
    patch_url: string;
    permalink_url: string;
    status: string;
    total_commits: int64;
    url: string;
}
