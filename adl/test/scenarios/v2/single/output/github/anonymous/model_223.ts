import { repo } from '../models/repo';
export interface model_223 {
    label: string;
    ref: string;
    repo: repo;
    sha: string;
    user: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
}
