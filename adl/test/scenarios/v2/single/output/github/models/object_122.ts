import { object_123 } from './object_123';
import { object_128 } from './object_128';
import { object_130 } from './object_130';
import { object_132 } from './object_132';
export interface object_122 {
    _links: object_123;
    base: object_128;
    body: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    closed_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    diff_url: string;
    head: object_130;
    html_url: string;
    issue_url: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    merged_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    number: int64;
    patch_url: string;
    state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    title: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: object_132;
}
