import { user } from './user';
export interface asset {
    content_type: string;
    created_at: string;
    download_count: double;
    id: double;
    label: string;
    name: string;
    size: double;
    state: string;
    updated_at: string;
    uploader: user;
    url: string;
}
