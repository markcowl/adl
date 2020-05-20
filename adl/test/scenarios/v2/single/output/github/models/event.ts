import { actor } from './actor';
import { object_58 } from './object_58';
import { object_59 } from './object_59';
import { object_60 } from './object_60';
import { organization } from './organization';
export interface event {
    actor: actor;
    created_at: object_58;
    id: int64;
    org: organization;
    payload: object_59;
    public: boolean;
    repo: object_60;
    type: string;
}
