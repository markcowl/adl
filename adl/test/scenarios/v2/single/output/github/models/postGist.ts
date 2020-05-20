export interface postGist {
    description: string;
    files: {
        'file1.txt': {
            content: string;
        };
    };
    public: boolean;
}
