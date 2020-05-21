import { user } from '../models/user';
export interface model_112 {
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    created_at: string;
    url: string;
    user: user;
}
