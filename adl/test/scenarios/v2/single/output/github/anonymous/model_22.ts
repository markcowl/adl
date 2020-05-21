import { user } from '../models/user';
export interface model_22 {
    body: string;
    /**
     * @description ISO 8601.
     */
    created_at: string;
    id: int64;
    url: string;
    user: user;
}
