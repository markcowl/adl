export interface postRepo {
    /**
     * 
     * @description True to create an initial commit with empty README. Default is false.
     */
    auto_init: any;
    description: any;
    /**
     * 
     * @description Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, "Haskell" Ignored if auto_init parameter is not provided.
     */
    gitignore_template: any;
    /**
     * 
     * @description True to enable downloads for this repository, false to disable them. Default is true.
     */
    has_downloads: any;
    /**
     * 
     * @description True to enable issues for this repository, false to disable them. Default is true.
     */
    has_issues: any;
    /**
     * 
     * @description True to enable the wiki for this repository, false to disable it. Default is true.
     */
    has_wiki: any;
    homepage: any;
    name?: any;
    /**
     * 
     * @description True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account.
     */
    private: any;
    /**
     * 
     * @description The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
     */
    team_id: any;
}
