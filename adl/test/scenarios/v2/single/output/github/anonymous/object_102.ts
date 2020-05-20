import { user } from '../models/user';
export interface object_102 {
    _links: {
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
        self: {
            href: string;
        };
    };
    body: string;
    commit_id: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    id: int64;
    path: string;
    position: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
}
