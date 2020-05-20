import { user } from '../models/user';
export interface object_176 {
    assignee: any;
    body: string;
    closed_at: any;
    comments: int64;
    comments_url: string;
    created_at: string;
    events_url: string;
    html_url: string;
    id: int64;
    labels: array;
    labels_url: string;
    milestone: any;
    number: int64;
    pull_request: {
        diff_url: any;
        html_url: any;
        patch_url: any;
    };
    score: double;
    state: string;
    title: string;
    updated_at: string;
    url: string;
    user: user;
}
