export type teams_list = Array<{
    id?: int64;
    members_count?: int64;
    name?: string;
    organization?: {
        avatar_url?: string;
        id?: int64;
        login?: string;
        url?: string;
    };
    permission?: string;
    repos_count?: int64;
    url?: string;
}>;
