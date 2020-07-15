export type contributorsStats = Array<{
    author?: {
        avatar_url?: string;
        gravatar_id?: string;
        id?: int64;
        login?: string;
        url?: string;
    };
    total?: int64;
    weeks?: Array<{
        a?: int64;
        c?: int64;
        d?: int64;
        w?: string;
    }>;
}>;
