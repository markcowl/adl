import { user } from '../models/user';
export interface object_98 {
    assignee: user;
    body: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    closed_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    comments: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    html_url: string;
    labels: array;
    milestone: {
        closed_issues: int64;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        creator: user;
        description: string;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        due_on: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
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
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
}
