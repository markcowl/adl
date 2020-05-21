import { user } from './user';
export interface issuesComment {
    body: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: string;
    html_url: string;
    id: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: string;
    url: string;
    user: user;
}
