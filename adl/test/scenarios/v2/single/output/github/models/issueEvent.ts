import { actor } from './actor';
import { object_82 } from './object_82';
export interface issueEvent {
    actor: actor;
    commit_id: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    event: string;
    issue: object_82;
    url: string;
}
