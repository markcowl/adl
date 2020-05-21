export interface repoCommitBody {
    author: {
        date: string;
        email: string;
        name: string;
    };
    message?: string;
    parents?: Array<string>;
    tree?: string;
}
