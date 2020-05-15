import { organization } from './organization';
import { actor } from './actor';
import { object_80, object_81 } from '../anonymous';
export interface repo {
    clone_url: any;
    /**
     * 
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    description: any;
    fork: any;
    forks: any;
    forks_count: any;
    full_name: any;
    git_url: any;
    has_downloads: any;
    has_issues: any;
    has_wiki: any;
    homepage: any;
    html_url: any;
    id: any;
    language: any;
    master_branch: any;
    mirror_url: any;
    name: any;
    open_issues: any;
    open_issues_count: any;
    organization: organization;
    owner: actor;
    parent: object_80;
    private: any;
    /**
     * 
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    pushed_at: any;
    size: any;
    source: object_81;
    ssh_url: any;
    svn_url: any;
    /**
     * 
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
    watchers: any;
    watchers_count: any;
}
