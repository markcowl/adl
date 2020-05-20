import { actor } from './actor';
import { organization } from './organization';
export interface event {
    actor: actor;
    created_at: {};
    id: int64;
    org: organization;
    payload: {};
    public: boolean;
    repo: {
        id: int64;
        name: string;
        url: string;
    };
    type: string;
}
