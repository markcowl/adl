export type ref = Array<{
    created_at?: string;
    creator?: {
        avatar_url?: string;
        gravatar_id?: string;
        id?: int64;
        login?: string;
        url?: string;
    };
    description?: string;
    id?: int64;
    state?: string;
    target_url?: string;
    updated_at?: string;
    url?: string;
}>;
