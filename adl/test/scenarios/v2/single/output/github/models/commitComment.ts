import { user } from './user';
export interface commitComment {
    body: string;
    commit_id: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: string;
    html_url: string;
    id: int64;
    line: int64;
    path: string;
    position: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: string;
    url: string;
    user: user;
}
