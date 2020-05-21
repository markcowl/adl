import { user } from '../models/user';
export interface model_115 {
    change_status: {
        additions: int64;
        deletions: int64;
        total: int64;
    };
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    committed_at: string;
    url: string;
    user: user;
    version: string;
}
