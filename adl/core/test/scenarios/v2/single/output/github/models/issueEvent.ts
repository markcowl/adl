import { actor } from './actor';
import { object_94 } from '../anonymous';
export interface issueEvent {
    actor: actor;
    commit_id: any;
    /**
     * 
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    event: any;
    issue: object_94;
    url: any;
}
