export interface rate_limit {
    rate: {
        limit: int64;
        remaining: int64;
        reset: int64;
    };
}
