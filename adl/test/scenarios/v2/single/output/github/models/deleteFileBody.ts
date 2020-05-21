export interface deleteFileBody {
    committer: {
        email: string;
        name: string;
    };
    message: string;
    sha: string;
}
