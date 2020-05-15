import { user } from './user';
export interface issuesComment {
    body: any;
    /**
     * 
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    html_url: any;
    id: any;
    /**
     * 
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
    user: user;
}
