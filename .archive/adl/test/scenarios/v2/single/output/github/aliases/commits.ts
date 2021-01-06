import { user } from "../models/user";
export type commits = Array<{
    author?: user;
    commit?: {
        author?: {
            date?: string;
            email?: string;
            name?: string;
        };
        committer?: {
            date?: string;
            email?: string;
            name?: string;
        };
        message?: string;
        tree?: {
            sha?: string;
            url?: string;
        };
        url?: string;
    };
    committer?: user;
    parents?: Array<{
        sha?: string;
        url?: string;
    }>;
    sha?: string;
    url?: string;
}>;
