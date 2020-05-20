export interface createFileBody {
    committer: {
        email: string;
        name: string;
    };
    content: string;
    message: string;
}
