import { user } from './user';
export interface commitComment {
    body: any;
    commit_id: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    html_url: any;
    id: any;
    line: any;
    path: any;
    position: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
    user: user;
}
