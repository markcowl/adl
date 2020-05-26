import { event } from '../models/event';
import { feeds } from '../models/feeds';
import { postGist } from '../models/postGist';
import { gist } from '../models/gist';
import { patchGist } from '../models/patchGist';
import { commentBody } from '../models/commentBody';
import { comment } from '../models/comment';
import { gitignore_lang } from '../models/gitignore_lang';
import { search_issues_by_keyword } from '../models/search_issues_by_keyword';
import { search_repositories_by_keyword } from '../models/search_repositories_by_keyword';
import { search_user_by_email } from '../models/search_user_by_email';
import { search_users_by_keyword } from '../models/search_users_by_keyword';
import { markdown } from '../models/markdown';
import { meta } from '../models/meta';
import { notifications } from '../models/notifications';
import { notificationMarkRead } from '../models/notificationMarkRead';
import { subscription } from '../models/subscription';
import { putSubscription } from '../models/putSubscription';
import { organization } from '../models/organization';
import { patchOrg } from '../models/patchOrg';
import { user } from '../models/user';
import { repo } from '../models/repo';
import { postRepo } from '../models/postRepo';
import { orgTeamsPost } from '../models/orgTeamsPost';
import { team } from '../models/team';
import { rate_limit } from '../models/rate_limit';
import { repoEdit } from '../models/repoEdit';
import { branch } from '../models/branch';
import { commitComment } from '../models/commitComment';
import { commit } from '../models/commit';
import { commitCommentBody } from '../models/commitCommentBody';
import { compare_commits } from '../models/compare_commits';
import { contents_path } from '../models/contents_path';
import { createFileBody } from '../models/createFileBody';
import { createFile } from '../models/createFile';
import { deleteFileBody } from '../models/deleteFileBody';
import { deleteFile } from '../models/deleteFile';
import { deployment } from '../models/deployment';
import { deployment_resp } from '../models/deployment_resp';
import { deployment_statuses_create } from '../models/deployment_statuses_create';
import { download } from '../models/download';
import { forkBody } from '../models/forkBody';
import { blob } from '../models/blob';
import { blobs } from '../models/blobs';
import { repoCommitBody } from '../models/repoCommitBody';
import { gitCommit } from '../models/gitCommit';
import { repoCommit } from '../models/repoCommit';
import { refsBody } from '../models/refsBody';
import { headBranch } from '../models/headBranch';
import { gitRefPatch } from '../models/gitRefPatch';
import { tagBody } from '../models/tagBody';
import { tag } from '../models/tag';
import { tree } from '../models/tree';
import { trees } from '../models/trees';
import { hookBody } from '../models/hookBody';
import { issue } from '../models/issue';
import { issuesComment } from '../models/issuesComment';
import { issueEvent } from '../models/issueEvent';
import { label } from '../models/label';
import { user_keys_post } from '../models/user_keys_post';
import { user_keys_keyId } from '../models/user_keys_keyId';
import { mergesBody } from '../models/mergesBody';
import { mergesSuccessful } from '../models/mergesSuccessful';
import { mergesConflict } from '../models/mergesConflict';
import { milestone } from '../models/milestone';
import { milestoneUpdate } from '../models/milestoneUpdate';
import { pullsPost } from '../models/pullsPost';
import { pullsComment } from '../models/pullsComment';
import { pullRequest } from '../models/pullRequest';
import { pullUpdate } from '../models/pullUpdate';
import { pullsCommentPost } from '../models/pullsCommentPost';
import { mergePullBody } from '../models/mergePullBody';
import { merge } from '../models/merge';
import { release_create } from '../models/release_create';
import { release } from '../models/release';
import { asset } from '../models/asset';
import { assetPatch } from '../models/assetPatch';
import { participationStats } from '../models/participationStats';
import { subscriptionBody } from '../models/subscriptionBody';
import { search_code } from '../models/search_code';
import { search_issues } from '../models/search_issues';
import { search_repositories } from '../models/search_repositories';
import { search_users } from '../models/search_users';
import { editTeam } from '../models/editTeam';
import { organizationAsTeamMember } from '../models/organizationAsTeamMember';
import { teamMembership } from '../models/teamMembership';
import { user_update } from '../models/user_update';
export type schema = Dictionary<string>;
export type schema = Array<event>;
export type schema = feeds;
export type schema = Array<{
    /**
     * @since v3
     */
    comments: int64;
    /**
     * @since v3
     */
    comments_url: string;
    /**
     * @since v3
     */
    created_at: string;
    /**
     * @since v3
     */
    description: string;
    /**
     * @since v3
     */
    files: {
        /**
         * @since v3
         */
        'ring.erl': {
            /**
             * @since v3
             */
            filename: string;
            /**
             * @since v3
             */
            raw_url: string;
            /**
             * @since v3
             */
            size: int64;
        };
    };
    /**
     * @since v3
     */
    git_pull_url: string;
    /**
     * @since v3
     */
    git_push_url: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    id: string;
    /**
     * @since v3
     */
    public: boolean;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = postGist;
export type schema = gist;
export type schema = Array<{
    /**
     * @since v3
     */
    comments: int64;
    /**
     * @since v3
     */
    comments_url: string;
    /**
     * @since v3
     */
    created_at: string;
    /**
     * @since v3
     */
    description: string;
    /**
     * @since v3
     */
    files: {
        /**
         * @since v3
         */
        'ring.erl': {
            /**
             * @since v3
             */
            filename: string;
            /**
             * @since v3
             */
            raw_url: string;
            /**
             * @since v3
             */
            size: int64;
        };
    };
    /**
     * @since v3
     */
    git_pull_url: string;
    /**
     * @since v3
     */
    git_push_url: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    id: string;
    /**
     * @since v3
     */
    public: boolean;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = Array<{
    /**
     * @since v3
     */
    comments: int64;
    /**
     * @since v3
     */
    comments_url: string;
    /**
     * @since v3
     */
    created_at: string;
    /**
     * @since v3
     */
    description: string;
    /**
     * @since v3
     */
    files: {
        /**
         * @since v3
         */
        'ring.erl': {
            /**
             * @since v3
             */
            filename: string;
            /**
             * @since v3
             */
            raw_url: string;
            /**
             * @since v3
             */
            size: int64;
        };
    };
    /**
     * @since v3
     */
    git_pull_url: string;
    /**
     * @since v3
     */
    git_push_url: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    id: string;
    /**
     * @since v3
     */
    public: boolean;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = gist;
export type schema = patchGist;
export type schema = gist;
export type schema = Array<{
    /**
     * @since v3
     */
    body: string;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = commentBody;
export type schema = comment;
export type schema = comment;
export type schema = comment;
export type schema = comment;
export type schema = Array<any>;
export type schema = gitignore_lang;
export type schema = Array<{
    /**
     * @since v3
     */
    assignee: user;
    /**
     * @since v3
     */
    body: string;
    /** @since v3 */
    closed_at: string;
    /**
     * @since v3
     */
    comments: int64;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    labels: Array<{
        /**
         * @since v3
         */
        color: string;
        /**
         * @since v3
         */
        name: string;
        /**
         * @since v3
         */
        url: string;
    }>;
    /**
     * @since v3
     */
    milestone: {
        /**
         * @since v3
         */
        closed_issues: int64;
        /** @since v3 */
        created_at: string;
        /**
         * @since v3
         */
        creator: user;
        /**
         * @since v3
         */
        description: string;
        /** @since v3 */
        due_on: string;
        /**
         * @since v3
         */
        number: int64;
        /**
         * @since v3
         */
        open_issues: int64;
        /**
         * @since v3
         */
        state: "open" | "closed";
        /**
         * @since v3
         */
        title: string;
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    number: int64;
    /**
     * @since v3
     */
    pull_request: {
        /**
         * @since v3
         */
        diff_url: string;
        /**
         * @since v3
         */
        html_url: string;
        /**
         * @since v3
         */
        patch_url: string;
    };
    /**
     * @since v3
     */
    state: "open" | "closed";
    /**
     * @since v3
     */
    title: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = search_issues_by_keyword;
export type schema = search_repositories_by_keyword;
export type schema = search_user_by_email;
export type schema = search_users_by_keyword;
export type schema = markdown;
export type schema = meta;
export type schema = Array<event>;
export type schema = notifications;
export type schema = notificationMarkRead;
export type schema = notifications;
export type schema = subscription;
export type schema = putSubscription;
export type schema = subscription;
export type schema = organization;
export type schema = patchOrg;
export type schema = organization;
export type schema = Array<event>;
export type schema = Array<{
    /**
     * @since v3
     */
    assignee: user;
    /**
     * @since v3
     */
    body: string;
    /** @since v3 */
    closed_at: string;
    /**
     * @since v3
     */
    comments: int64;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    labels: Array<{
        /**
         * @since v3
         */
        color: string;
        /**
         * @since v3
         */
        name: string;
        /**
         * @since v3
         */
        url: string;
    }>;
    /**
     * @since v3
     */
    milestone: {
        /**
         * @since v3
         */
        closed_issues: int64;
        /** @since v3 */
        created_at: string;
        /**
         * @since v3
         */
        creator: user;
        /**
         * @since v3
         */
        description: string;
        /** @since v3 */
        due_on: string;
        /**
         * @since v3
         */
        number: int64;
        /**
         * @since v3
         */
        open_issues: int64;
        /**
         * @since v3
         */
        state: "open" | "closed";
        /**
         * @since v3
         */
        title: string;
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    number: int64;
    /**
     * @since v3
     */
    pull_request: {
        /**
         * @since v3
         */
        diff_url: string;
        /**
         * @since v3
         */
        html_url: string;
        /**
         * @since v3
         */
        patch_url: string;
    };
    /**
     * @since v3
     */
    state: "open" | "closed";
    /**
     * @since v3
     */
    title: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = Array<user>;
export type schema = Array<user>;
export type schema = Array<repo>;
export type schema = postRepo;
export type schema = Array<repo>;
export type schema = Array<{
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    name: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = orgTeamsPost;
export type schema = team;
export type schema = rate_limit;
export type schema = repo;
export type schema = repoEdit;
export type schema = repo;
export type schema = Array<user>;
export type schema = Array<{
    /**
     * @since v3
     */
    commit: {
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    name: string;
}>;
export type schema = branch;
export type schema = Array<user>;
export type schema = Array<{
    /**
     * @since v3
     */
    body: string;
    /**
     * @since v3
     */
    commit_id: string;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    line: int64;
    /**
     * @since v3
     */
    path: string;
    /**
     * @since v3
     */
    position: int64;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = commitComment;
export type schema = commentBody;
export type schema = commitComment;
export type schema = Array<{
    /**
     * @since v3
     */
    author: user;
    /**
     * @since v3
     */
    commit: {
        /**
         * @since v3
         */
        author: {
            /** @since v3 */
            date: string;
            /**
             * @since v3
             */
            email: string;
            /**
             * @since v3
             */
            name: string;
        };
        /**
         * @since v3
         */
        committer: {
            /** @since v3 */
            date: string;
            /**
             * @since v3
             */
            email: string;
            /**
             * @since v3
             */
            name: string;
        };
        /**
         * @since v3
         */
        message: string;
        /**
         * @since v3
         */
        tree: {
            /**
             * @since v3
             */
            sha: string;
            /**
             * @since v3
             */
            url: string;
        };
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    committer: user;
    /**
     * @since v3
     */
    parents: Array<{
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        url: string;
    }>;
    /**
     * @since v3
     */
    sha: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = Array<{
    /**
     * @since v3
     */
    commit_url: string;
    /**
     * @since v3
     */
    name: string;
    /**
     * @since v3
     */
    repository_url: string;
    /**
     * @since v3
     */
    sha: string;
    /**
     * @since v3
     */
    state: string;
    /**
     * @since v3
     */
    statuses: Array<{
        /**
         * @since v3
         */
        context: string;
        /**
         * @since v3
         */
        created_at: string;
        /**
         * @since v3
         */
        description: string;
        /**
         * @since v3
         */
        id: double;
        /**
         * @since v3
         */
        state: string;
        /**
         * @since v3
         */
        target_url: string;
        /**
         * @since v3
         */
        updated_at: string;
        /**
         * @since v3
         */
        url: string;
    }>;
}>;
export type schema = commit;
export type schema = Array<{
    /**
     * @since v3
     */
    body: string;
    /**
     * @since v3
     */
    commit_id: string;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    line: int64;
    /**
     * @since v3
     */
    path: string;
    /**
     * @since v3
     */
    position: int64;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = commitCommentBody;
export type schema = commitComment;
export type schema = compare_commits;
export type schema = contents_path;
export type schema = createFileBody;
export type schema = createFile;
export type schema = deleteFileBody;
export type schema = deleteFile;
export type schema = Array<user>;
export type schema = Array<{
    /**
     * @since v3
     */
    created_at: string;
    /**
     * @since v3
     */
    creator: user;
    /**
     * @since v3
     */
    description: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    payload: string;
    /**
     * @since v3
     */
    sha: string;
    /**
     * @since v3
     */
    statuses_url: string;
    /**
     * @since v3
     */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = deployment;
export type schema = deployment_resp;
export type schema = Array<{
    /**
     * @since v3
     */
    created_at: string;
    /**
     * @since v3
     */
    creator: user;
    /**
     * @since v3
     */
    description: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    payload: string;
    /**
     * @since v3
     */
    state: string;
    /**
     * @since v3
     */
    target_url: string;
    /**
     * @since v3
     */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = deployment_statuses_create;
export type schema = Array<download>;
export type schema = download;
export type schema = Array<event>;
export type schema = any;
export type schema = forkBody;
export type schema = repo;
export type schema = blob;
export type schema = blobs;
export type schema = blob;
export type schema = repoCommitBody;
export type schema = gitCommit;
export type schema = repoCommit;
export type schema = Array<{
    /**
     * @since v3
     */
    object: {
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        type: string;
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    ref: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = refsBody;
export type schema = headBranch;
export type schema = headBranch;
export type schema = gitRefPatch;
export type schema = headBranch;
export type schema = tagBody;
export type schema = tag;
export type schema = tag;
export type schema = tree;
export type schema = trees;
export type schema = tree;
export type schema = Array<{
    /**
     * @since v3
     */
    active: boolean;
    /**
     * @since v3
     */
    config: {
        /**
         * @since v3
         */
        content_type: string;
        /**
         * @since v3
         */
        url: string;
    };
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    events: Array<"push" | "issues" | "issue_comment" | "commit_comment" | "pull_request" | "pull_request_review_comment" | "gollum" | "watch" | "download" | "fork" | "fork_apply" | "member" | "public" | "team_add" | "status">;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    name: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = hookBody;
export type schema = Array<{
    /**
     * @since v3
     */
    active: boolean;
    /**
     * @since v3
     */
    config: {
        /**
         * @since v3
         */
        content_type: string;
        /**
         * @since v3
         */
        url: string;
    };
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    events: Array<"push" | "issues" | "issue_comment" | "commit_comment" | "pull_request" | "pull_request_review_comment" | "gollum" | "watch" | "download" | "fork" | "fork_apply" | "member" | "public" | "team_add" | "status">;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    name: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = Array<{
    /**
     * @since v3
     */
    active: boolean;
    /**
     * @since v3
     */
    config: {
        /**
         * @since v3
         */
        content_type: string;
        /**
         * @since v3
         */
        url: string;
    };
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    events: Array<"push" | "issues" | "issue_comment" | "commit_comment" | "pull_request" | "pull_request_review_comment" | "gollum" | "watch" | "download" | "fork" | "fork_apply" | "member" | "public" | "team_add" | "status">;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    name: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = hookBody;
export type schema = Array<{
    /**
     * @since v3
     */
    active: boolean;
    /**
     * @since v3
     */
    config: {
        /**
         * @since v3
         */
        content_type: string;
        /**
         * @since v3
         */
        url: string;
    };
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    events: Array<"push" | "issues" | "issue_comment" | "commit_comment" | "pull_request" | "pull_request_review_comment" | "gollum" | "watch" | "download" | "fork" | "fork_apply" | "member" | "public" | "team_add" | "status">;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    name: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = Array<{
    /**
     * @since v3
     */
    assignee: user;
    /**
     * @since v3
     */
    body: string;
    /** @since v3 */
    closed_at: string;
    /**
     * @since v3
     */
    comments: int64;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    labels: Array<{
        /**
         * @since v3
         */
        color: string;
        /**
         * @since v3
         */
        name: string;
        /**
         * @since v3
         */
        url: string;
    }>;
    /**
     * @since v3
     */
    milestone: {
        /**
         * @since v3
         */
        closed_issues: int64;
        /** @since v3 */
        created_at: string;
        /**
         * @since v3
         */
        creator: user;
        /**
         * @since v3
         */
        description: string;
        /** @since v3 */
        due_on: string;
        /**
         * @since v3
         */
        number: int64;
        /**
         * @since v3
         */
        open_issues: int64;
        /**
         * @since v3
         */
        state: "open" | "closed";
        /**
         * @since v3
         */
        title: string;
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    number: int64;
    /**
     * @since v3
     */
    pull_request: {
        /**
         * @since v3
         */
        diff_url: string;
        /**
         * @since v3
         */
        html_url: string;
        /**
         * @since v3
         */
        patch_url: string;
    };
    /**
     * @since v3
     */
    state: "open" | "closed";
    /**
     * @since v3
     */
    title: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = issue;
export type schema = issue;
export type schema = Array<{
    /**
     * @since v3
     */
    _links: {
        /**
         * @since v3
         */
        html: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        pull_request: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        self: {
            /**
             * @since v3
             */
            href: string;
        };
    };
    /**
     * @since v3
     */
    body: string;
    /**
     * @since v3
     */
    commit_id: string;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    path: string;
    /**
     * @since v3
     */
    position: int64;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = issuesComment;
export type schema = commentBody;
export type schema = issuesComment;
export type schema = Array<issueEvent>;
export type schema = issueEvent;
export type schema = issue;
export type schema = issue;
export type schema = issue;
export type schema = Array<{
    /**
     * @since v3
     */
    _links: {
        /**
         * @since v3
         */
        html: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        pull_request: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        self: {
            /**
             * @since v3
             */
            href: string;
        };
    };
    /**
     * @since v3
     */
    body: string;
    /**
     * @since v3
     */
    commit_id: string;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    path: string;
    /**
     * @since v3
     */
    position: int64;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = commentBody;
export type schema = issuesComment;
export type schema = Array<issueEvent>;
export type schema = Array<{
    /**
     * @since v3
     */
    color: string & MaxLength<6> & MinLength<6>;
    /**
     * @since v3
     */
    name: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = Array<string>;
export type schema = label;
export type schema = Array<string>;
export type schema = label;
export type schema = Array<{
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    key: string;
    /**
     * @since v3
     */
    title: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = user_keys_post;
export type schema = user_keys_keyId;
export type schema = user_keys_keyId;
export type schema = Array<{
    /**
     * @since v3
     */
    color: string & MaxLength<6> & MinLength<6>;
    /**
     * @since v3
     */
    name: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = Array<string>;
export type schema = label;
export type schema = label;
export type schema = Array<string>;
export type schema = label;
export type schema = Dictionary<int64>;
export type schema = mergesBody;
export type schema = mergesSuccessful;
export type schema = mergesConflict;
export type schema = mergesConflict;
export type schema = milestone;
export type schema = milestoneUpdate;
export type schema = milestone;
export type schema = milestone;
export type schema = milestoneUpdate;
export type schema = milestone;
export type schema = Array<{
    /**
     * @since v3
     */
    color: string & MaxLength<6> & MinLength<6>;
    /**
     * @since v3
     */
    name: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = notifications;
export type schema = notificationMarkRead;
export type schema = Array<{
    /**
     * @since v3
     */
    _links: {
        /**
         * @since v3
         */
        comments: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        html: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        review_comments: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        self: {
            /**
             * @since v3
             */
            href: string;
        };
    };
    /**
     * @since v3
     */
    base: {
        /**
         * @since v3
         */
        label: string;
        /**
         * @since v3
         */
        ref: string;
        /**
         * @since v3
         */
        repo: repo;
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        user: {
            /**
             * @since v3
             */
            avatar_url: string;
            /**
             * @since v3
             */
            gravatar_id: string;
            /**
             * @since v3
             */
            id: int64;
            /**
             * @since v3
             */
            login: string;
            /**
             * @since v3
             */
            url: string;
        };
    };
    /**
     * @since v3
     */
    body: string;
    /** @since v3 */
    closed_at: string;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    diff_url: string;
    /**
     * @since v3
     */
    head: {
        /**
         * @since v3
         */
        label: string;
        /**
         * @since v3
         */
        ref: string;
        /**
         * @since v3
         */
        repo: repo;
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        user: {
            /**
             * @since v3
             */
            avatar_url: string;
            /**
             * @since v3
             */
            gravatar_id: string;
            /**
             * @since v3
             */
            id: int64;
            /**
             * @since v3
             */
            login: string;
            /**
             * @since v3
             */
            url: string;
        };
    };
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    issue_url: string;
    /** @since v3 */
    merged_at: string;
    /**
     * @since v3
     */
    number: int64;
    /**
     * @since v3
     */
    patch_url: string;
    /**
     * @since v3
     */
    state: "open" | "closed";
    /**
     * @since v3
     */
    title: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: {
        /**
         * @since v3
         */
        avatar_url: string;
        /**
         * @since v3
         */
        gravatar_id: string;
        /**
         * @since v3
         */
        id: int64;
        /**
         * @since v3
         */
        login: string;
        /**
         * @since v3
         */
        url: string;
    };
}>;
export type schema = pullsPost;
export type schema = Array<{
    /**
     * @since v3
     */
    _links: {
        /**
         * @since v3
         */
        comments: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        html: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        review_comments: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        self: {
            /**
             * @since v3
             */
            href: string;
        };
    };
    /**
     * @since v3
     */
    base: {
        /**
         * @since v3
         */
        label: string;
        /**
         * @since v3
         */
        ref: string;
        /**
         * @since v3
         */
        repo: repo;
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        user: {
            /**
             * @since v3
             */
            avatar_url: string;
            /**
             * @since v3
             */
            gravatar_id: string;
            /**
             * @since v3
             */
            id: int64;
            /**
             * @since v3
             */
            login: string;
            /**
             * @since v3
             */
            url: string;
        };
    };
    /**
     * @since v3
     */
    body: string;
    /** @since v3 */
    closed_at: string;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    diff_url: string;
    /**
     * @since v3
     */
    head: {
        /**
         * @since v3
         */
        label: string;
        /**
         * @since v3
         */
        ref: string;
        /**
         * @since v3
         */
        repo: repo;
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        user: {
            /**
             * @since v3
             */
            avatar_url: string;
            /**
             * @since v3
             */
            gravatar_id: string;
            /**
             * @since v3
             */
            id: int64;
            /**
             * @since v3
             */
            login: string;
            /**
             * @since v3
             */
            url: string;
        };
    };
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    issue_url: string;
    /** @since v3 */
    merged_at: string;
    /**
     * @since v3
     */
    number: int64;
    /**
     * @since v3
     */
    patch_url: string;
    /**
     * @since v3
     */
    state: "open" | "closed";
    /**
     * @since v3
     */
    title: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: {
        /**
         * @since v3
         */
        avatar_url: string;
        /**
         * @since v3
         */
        gravatar_id: string;
        /**
         * @since v3
         */
        id: int64;
        /**
         * @since v3
         */
        login: string;
        /**
         * @since v3
         */
        url: string;
    };
}>;
export type schema = Array<{
    /**
     * @since v3
     */
    _links: {
        /**
         * @since v3
         */
        html: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        pull_request: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        self: {
            /**
             * @since v3
             */
            href: string;
        };
    };
    /**
     * @since v3
     */
    body: string;
    /**
     * @since v3
     */
    commit_id: string;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    path: string;
    /**
     * @since v3
     */
    position: int64;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = pullsComment;
export type schema = commentBody;
export type schema = pullsComment;
export type schema = pullRequest;
export type schema = pullUpdate;
export type schema = repo;
export type schema = pullsComment;
export type schema = pullsCommentPost;
export type schema = pullsComment;
export type schema = Array<{
    /**
     * @since v3
     */
    author: user;
    /**
     * @since v3
     */
    commit: {
        /**
         * @since v3
         */
        author: {
            /** @since v3 */
            date: string;
            /**
             * @since v3
             */
            email: string;
            /**
             * @since v3
             */
            name: string;
        };
        /**
         * @since v3
         */
        committer: {
            /** @since v3 */
            date: string;
            /**
             * @since v3
             */
            email: string;
            /**
             * @since v3
             */
            name: string;
        };
        /**
         * @since v3
         */
        message: string;
        /**
         * @since v3
         */
        tree: {
            /**
             * @since v3
             */
            sha: string;
            /**
             * @since v3
             */
            url: string;
        };
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    committer: user;
    /**
     * @since v3
     */
    parents: Array<{
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        url: string;
    }>;
    /**
     * @since v3
     */
    sha: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = Array<{
    /**
     * @since v3
     */
    _links: {
        /**
         * @since v3
         */
        comments: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        html: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        review_comments: {
            /**
             * @since v3
             */
            href: string;
        };
        /**
         * @since v3
         */
        self: {
            /**
             * @since v3
             */
            href: string;
        };
    };
    /**
     * @since v3
     */
    base: {
        /**
         * @since v3
         */
        label: string;
        /**
         * @since v3
         */
        ref: string;
        /**
         * @since v3
         */
        repo: repo;
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        user: {
            /**
             * @since v3
             */
            avatar_url: string;
            /**
             * @since v3
             */
            gravatar_id: string;
            /**
             * @since v3
             */
            id: int64;
            /**
             * @since v3
             */
            login: string;
            /**
             * @since v3
             */
            url: string;
        };
    };
    /**
     * @since v3
     */
    body: string;
    /** @since v3 */
    closed_at: string;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    diff_url: string;
    /**
     * @since v3
     */
    head: {
        /**
         * @since v3
         */
        label: string;
        /**
         * @since v3
         */
        ref: string;
        /**
         * @since v3
         */
        repo: repo;
        /**
         * @since v3
         */
        sha: string;
        /**
         * @since v3
         */
        user: {
            /**
             * @since v3
             */
            avatar_url: string;
            /**
             * @since v3
             */
            gravatar_id: string;
            /**
             * @since v3
             */
            id: int64;
            /**
             * @since v3
             */
            login: string;
            /**
             * @since v3
             */
            url: string;
        };
    };
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    issue_url: string;
    /** @since v3 */
    merged_at: string;
    /**
     * @since v3
     */
    number: int64;
    /**
     * @since v3
     */
    patch_url: string;
    /**
     * @since v3
     */
    state: "open" | "closed";
    /**
     * @since v3
     */
    title: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: {
        /**
         * @since v3
         */
        avatar_url: string;
        /**
         * @since v3
         */
        gravatar_id: string;
        /**
         * @since v3
         */
        id: int64;
        /**
         * @since v3
         */
        login: string;
        /**
         * @since v3
         */
        url: string;
    };
}>;
export type schema = mergePullBody;
export type schema = merge;
export type schema = merge;
export type schema = contents_path;
export type schema = Array<{
    /**
     * @since v3
     */
    assets: Array<{
        /**
         * @since v3
         */
        content_type: string;
        /**
         * @since v3
         */
        created_at: string;
        /**
         * @since v3
         */
        download_count: int64;
        /**
         * @since v3
         */
        id: int64;
        /**
         * @since v3
         */
        label: string;
        /**
         * @since v3
         */
        name: string;
        /**
         * @since v3
         */
        size: int64;
        /**
         * @since v3
         */
        state: string;
        /**
         * @since v3
         */
        updated_at: string;
        /**
         * @since v3
         */
        uploader: user;
        /**
         * @since v3
         */
        url: string;
    }>;
    /**
     * @since v3
     */
    assets_url: string;
    /**
     * @since v3
     */
    author: user;
    /**
     * @since v3
     */
    body: string;
    /**
     * @since v3
     */
    created_at: string;
    /**
     * @since v3
     */
    draft: boolean;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    name: string;
    /**
     * @since v3
     */
    prerelease: boolean;
    /**
     * @since v3
     */
    published_at: string;
    /**
     * @since v3
     */
    tag_name: string;
    /**
     * @since v3
     */
    tarball_url: string;
    /**
     * @since v3
     */
    target_commitish: string;
    /**
     * @since v3
     */
    upload_url: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    zipball_url: string;
}>;
export type schema = release_create;
export type schema = release;
export type schema = asset;
export type schema = assetPatch;
export type schema = asset;
export type schema = release;
export type schema = release_create;
export type schema = release;
export type schema = Array<asset>;
export type schema = Array<user>;
export type schema = Array<int64>;
export type schema = Array<{
    /**
     * @since v3
     */
    days: Array<int64>;
    /**
     * @since v3
     */
    total: int64;
    /**
     * @since v3
     */
    week: int64;
}>;
export type schema = Array<{
    /**
     * @since v3
     */
    author: {
        /**
         * @since v3
         */
        avatar_url: string;
        /**
         * @since v3
         */
        gravatar_id: string;
        /**
         * @since v3
         */
        id: int64;
        /**
         * @since v3
         */
        login: string;
        /**
         * @since v3
         */
        url: string;
    };
    /** @since v3 */
    total: int64;
    /**
     * @since v3
     */
    weeks: Array<{
        /** @since v3 */
        a: int64;
        /** @since v3 */
        c: int64;
        /** @since v3 */
        d: int64;
        /** @since v3 */
        w: string;
    }>;
}>;
export type schema = participationStats;
export type schema = Array<int64>;
export type schema = Array<{
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    creator: {
        /**
         * @since v3
         */
        avatar_url: string;
        /**
         * @since v3
         */
        gravatar_id: string;
        /**
         * @since v3
         */
        id: int64;
        /**
         * @since v3
         */
        login: string;
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    description: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    state: string;
    /**
     * @since v3
     */
    target_url: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = headBranch;
export type schema = Array<{
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    creator: {
        /**
         * @since v3
         */
        avatar_url: string;
        /**
         * @since v3
         */
        gravatar_id: string;
        /**
         * @since v3
         */
        id: int64;
        /**
         * @since v3
         */
        login: string;
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    description: string;
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    state: string;
    /**
     * @since v3
     */
    target_url: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = Array<user>;
export type schema = subscription;
export type schema = subscriptionBody;
export type schema = subscription;
export type schema = Array<tag>;
export type schema = Array<{
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    name: string;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = Array<user>;
export type schema = Array<repo>;
export type schema = search_code;
export type schema = search_issues;
export type schema = search_repositories;
export type schema = search_users;
export type schema = team;
export type schema = editTeam;
export type schema = team;
export type schema = Array<user>;
export type schema = organizationAsTeamMember;
export type schema = teamMembership;
export type schema = teamMembership;
export type schema = organizationAsTeamMember;
export type schema = any;
export type schema = user;
export type schema = user_update;
export type schema = user;
export type schema = Array<string>;
export type schema = Array<string>;
export type schema = Array<string>;
export type schema = Array<user>;
export type schema = Array<user>;
export type schema = Array<{
    /**
     * @since v3
     */
    assignee: user;
    /**
     * @since v3
     */
    body: string;
    /** @since v3 */
    closed_at: string;
    /**
     * @since v3
     */
    comments: int64;
    /** @since v3 */
    created_at: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    labels: Array<{
        /**
         * @since v3
         */
        color: string;
        /**
         * @since v3
         */
        name: string;
        /**
         * @since v3
         */
        url: string;
    }>;
    /**
     * @since v3
     */
    milestone: {
        /**
         * @since v3
         */
        closed_issues: int64;
        /** @since v3 */
        created_at: string;
        /**
         * @since v3
         */
        creator: user;
        /**
         * @since v3
         */
        description: string;
        /** @since v3 */
        due_on: string;
        /**
         * @since v3
         */
        number: int64;
        /**
         * @since v3
         */
        open_issues: int64;
        /**
         * @since v3
         */
        state: "open" | "closed";
        /**
         * @since v3
         */
        title: string;
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    number: int64;
    /**
     * @since v3
     */
    pull_request: {
        /**
         * @since v3
         */
        diff_url: string;
        /**
         * @since v3
         */
        html_url: string;
        /**
         * @since v3
         */
        patch_url: string;
    };
    /**
     * @since v3
     */
    state: "open" | "closed";
    /**
     * @since v3
     */
    title: string;
    /** @since v3 */
    updated_at: string;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = Array<any>;
export type schema = user_keys_post;
export type schema = user_keys_keyId;
export type schema = user_keys_keyId;
export type schema = Array<any>;
export type schema = Array<repo>;
export type schema = postRepo;
export type schema = Array<repo>;
export type schema = Array<any>;
export type schema = Array<repo>;
export type schema = Array<{
    /**
     * @since v3
     */
    id: int64;
    /**
     * @since v3
     */
    members_count: int64;
    /**
     * @since v3
     */
    name: string;
    /**
     * @since v3
     */
    organization: {
        /**
         * @since v3
         */
        avatar_url: string;
        /**
         * @since v3
         */
        id: int64;
        /**
         * @since v3
         */
        login: string;
        /**
         * @since v3
         */
        url: string;
    };
    /**
     * @since v3
     */
    permission: string;
    /**
     * @since v3
     */
    repos_count: int64;
    /**
     * @since v3
     */
    url: string;
}>;
export type schema = Array<user>;
export type schema = user;
export type schema = Array<user>;
export type schema = Array<{
    /**
     * @since v3
     */
    comments: int64;
    /**
     * @since v3
     */
    comments_url: string;
    /**
     * @since v3
     */
    created_at: string;
    /**
     * @since v3
     */
    description: string;
    /**
     * @since v3
     */
    files: {
        /**
         * @since v3
         */
        'ring.erl': {
            /**
             * @since v3
             */
            filename: string;
            /**
             * @since v3
             */
            raw_url: string;
            /**
             * @since v3
             */
            size: int64;
        };
    };
    /**
     * @since v3
     */
    git_pull_url: string;
    /**
     * @since v3
     */
    git_push_url: string;
    /**
     * @since v3
     */
    html_url: string;
    /**
     * @since v3
     */
    id: string;
    /**
     * @since v3
     */
    public: boolean;
    /**
     * @since v3
     */
    url: string;
    /**
     * @since v3
     */
    user: user;
}>;
export type schema = Array<any>;
export type schema = Array<any>;
export type schema = Array<repo>;
