import { user } from './user';
export interface search_users {
    items: Array<user>;
    total_count: int64;
}
