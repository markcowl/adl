import { user } from './user';
export interface release {
    assets: unknown /*= (not tsschema -- undefinedassets/undefined ) =*/;
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
