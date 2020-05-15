import { user } from './user';
export interface milestone {
    closed_issues: any;
    /**
     * 
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    creator: user;
    description: any;
    /**
     * 
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    due_on: any;
    number: any;
    open_issues: any;
    state: any;
    title: any;
    url: any;
}
