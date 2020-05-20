import { object_74 } from './object_74';
import { user } from './user';
export interface object_73 {
    change_status: object_74;
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    committed_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
    version: string;
}
