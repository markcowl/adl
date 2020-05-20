export interface gitCommit {
    author: {
        date: string;
        email: string;
        name: string;
    };
    message: string;
    parents: string;
    tree: string;
}
