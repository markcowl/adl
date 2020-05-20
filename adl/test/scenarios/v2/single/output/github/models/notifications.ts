import { object_102 } from './object_102';
import { object_103 } from './object_103';
export interface notifications {
    id: int64;
    last_read_at: string;
    reason: string;
    repository: object_102;
    subject: object_103;
    unread: boolean;
    updated_at: string;
    url: string;
}
