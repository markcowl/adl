export interface patchGist {
    description: string;
    files: {
        'delete_this_file.txt': string;
        'file1.txt': {
            content: string;
        };
        'new_file.txt': {
            content: string;
        };
        'old_name.txt': {
            content: string;
            filename: string;
        };
    };
}
