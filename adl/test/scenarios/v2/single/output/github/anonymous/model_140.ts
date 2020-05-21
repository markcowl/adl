import { user } from '../models/user';
export interface model_140 {
    assignee: user;
    body: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    closed_at: string;
    comments: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: string;
    html_url: string;
    labels: Array<{
        color: string;
        name: string;
        url: string;
    }>;
    milestone: {
        closed_issues: int64;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        created_at: string;
        creator: user;
        description: string;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        due_on: string;
        number: int64;
        open_issues: int64;
        state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        title: string;
        url: string;
    };
    number: int64;
    pull_request: {
        diff_url: string;
        html_url: string;
        patch_url: string;
    };
    state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    title: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: string;
    url: string;
    user: user;
}
