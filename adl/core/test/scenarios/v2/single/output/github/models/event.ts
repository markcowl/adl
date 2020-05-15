import { actor } from './actor';
import { object_70, object_71, object_72 } from '../anonymous';
import { organization } from './organization';
export interface event {
    actor: actor;
    created_at: object_70;
    id: any;
    org: organization;
    payload: object_71;
    public: any;
    repo: object_72;
    type: any;
}
