import { user } from './user';
export interface deployment_resp {
    created_at: string;
    creator: user;
    description: string;
    id: int64;
    payload: string;
    sha: string;
    statuses_url: string;
    updated_at: string;
    url: string;
}
