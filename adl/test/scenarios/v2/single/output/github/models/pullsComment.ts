import { object_133 } from './object_133';
import { object_137 } from './object_137';
export interface pullsComment {
    _links: object_133;
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
    user: object_137;
}
