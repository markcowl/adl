import { actor } from './actor';
export interface issueEvent {
    actor: actor;
    commit_id: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    event: any;
    issue: {
        assignee: user;
        body: any;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        closed_at: any;
        comments: any;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        created_at: any;
        html_url: any;
        labels: any;
        milestone: {
            closed_issues: any;
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            created_at: any;
            creator: user;
            description: any;
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            due_on: any;
            number: any;
            open_issues: any;
            state: any;
            title: any;
            url: any;
        };
        number: any;
        pull_request: {
            diff_url: any;
            html_url: any;
            patch_url: any;
        };
        state: any;
        title: any;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        updated_at: any;
        url: any;
        user: user;
    };
    url: any;
}
