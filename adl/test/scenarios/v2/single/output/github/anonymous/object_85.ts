import { user } from '../models/user';
export interface object_85 {
    change_status: {
        additions: int64;
        deletions: int64;
        total: int64;
    };
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    committed_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
    version: string;
}
