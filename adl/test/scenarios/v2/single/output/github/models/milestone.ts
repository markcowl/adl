import { user } from './user';
export interface milestone {
    closed_issues: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: string;
    creator: user;
    description: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    due_on: string;
    number: int64;
    open_issues: int64;
    state: "open" | "closed";
    title: string;
    url: string;
}
