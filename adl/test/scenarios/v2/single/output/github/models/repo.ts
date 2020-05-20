import { actor } from './actor';
import { object_68 } from './object_68';
import { object_69 } from './object_69';
import { organization } from './organization';
export interface repo {
    clone_url: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    description: string;
    fork: boolean;
    forks: int64;
    forks_count: int64;
    full_name: string;
    git_url: string;
    has_downloads: boolean;
    has_issues: boolean;
    has_wiki: boolean;
    homepage: string;
    html_url: string;
    id: int64;
    language: string;
    master_branch: string;
    mirror_url: string;
    name: string;
    open_issues: int64;
    open_issues_count: int64;
    organization: organization;
    owner: actor;
    parent: object_68;
    private: boolean;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    pushed_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    size: int64;
    source: object_69;
    ssh_url: string;
    svn_url: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    watchers: int64;
    watchers_count: int64;
}
