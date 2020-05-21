export interface orgTeamsPost {
    name?: string;
    permission: "pull" | "push" | "admin";
    repo_names: Array<string>;
}
