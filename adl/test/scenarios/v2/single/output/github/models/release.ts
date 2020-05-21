import { user } from './user';
export interface release {
    assets: Array<{
        content_type: string;
        created_at: string;
        download_count: int64;
        id: int64;
        label: string;
        name: string;
        size: int64;
        state: string;
        updated_at: string;
        uploader: user;
        url: string;
    }>;
    assets_url: string;
    author: user;
    body: string;
    created_at: string;
    draft: boolean;
    html_url: string;
    id: int64;
    name: string;
    prerelease: boolean;
    published_at: string;
    tag_name: string;
    tarball_url: string;
    target_commitish: string;
    upload_url: string;
    url: string;
    zipball_url: string;
}
