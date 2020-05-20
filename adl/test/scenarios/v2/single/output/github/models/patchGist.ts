export interface patchGist {
    description: any;
    files: {
        'delete_this_file.txt': any;
        'file1.txt': {
            content: any;
        };
        'new_file.txt': {
            content: any;
        };
        'old_name.txt': {
            content: any;
            filename: any;
        };
    };
}
