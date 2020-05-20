export interface postRepo {
    /**
     * @description True to create an initial commit with empty README. Default is false.
     */
    auto_init: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    description: string;
    /**
     * @description Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, "Haskell" Ignored if auto_init parameter is not provided.
     */
    gitignore_template: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description True to enable downloads for this repository, false to disable them. Default is true.
     */
    has_downloads: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description True to enable issues for this repository, false to disable them. Default is true.
     */
    has_issues: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description True to enable the wiki for this repository, false to disable it. Default is true.
     */
    has_wiki: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    homepage: string;
    name?: string;
    /**
     * @description True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account.
     */
    private: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
     */
    team_id: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
