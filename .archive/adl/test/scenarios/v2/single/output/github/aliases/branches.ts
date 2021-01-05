export type branches = Array<{
    commit?: {
        sha?: string;
        url?: string;
    };
    name?: string;
}>;
