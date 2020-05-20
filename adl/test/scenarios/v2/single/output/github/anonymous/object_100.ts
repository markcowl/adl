import { user } from '../models/user';
export interface object_100 {
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
}
