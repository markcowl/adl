export interface subscription {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: string;
    ignored: boolean;
    reason: string;
    repository_url: string;
    subscribed: boolean;
    thread_url: string;
    url: string;
}
