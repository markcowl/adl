export interface release_create {
    body: string;
    draft: boolean;
    name: string;
    prerelease: boolean;
    tag_name: string;
    target_commitish: string;
}
