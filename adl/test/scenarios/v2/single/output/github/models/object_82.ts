import { object_84 } from './object_84';
import { object_85 } from './object_85';
import { user } from './user';
export interface object_82 {
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
    milestone: object_84;
    number: int64;
    pull_request: object_85;
    state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    title: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
}
