export interface model_72 {
    author: {
        date: string;
        email: string;
        name: string;
    };
    committer: {
        date: string;
        email: string;
        name: string;
    };
    html_url: string;
    message: string;
    parents: Array<{
        html_url: string;
        sha: string;
        url: string;
    }>;
    sha: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
