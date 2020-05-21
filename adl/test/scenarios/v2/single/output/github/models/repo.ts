import { actor } from './actor';
import { organization } from './organization';
export interface repo {
    clone_url: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: string;
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
    parent: {};
    private: boolean;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    pushed_at: string;
    size: int64;
    source: {};
    ssh_url: string;
    svn_url: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: string;
    url: string;
    watchers: int64;
    watchers_count: int64;
}
