import { actor } from './actor';
import { organization } from './organization';
export interface event {
    actor: actor;
    created_at: {};
    id: any;
    org: organization;
    payload: {};
    public: any;
    repo: {
        id: any;
        name: any;
        url: any;
    };
    type: any;
}
