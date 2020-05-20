import { actor } from './models/actor';
import { repo } from './models/repo';
import { user } from './models/user';
export interface object_0 {
    collaborators: int64;
    name: string;
    private_repos: int64;
    space: int64;
}
export interface object_1 {
    html: string;
    self: string;
}
export interface object_2 {
    author: user;
    commit: {
        author: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
            email: string;
            name: string;
        };
        committer: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
            email: string;
            name: string;
        };
        message: string;
        tree: {
            sha: string;
            url: string;
        };
        url: string;
    };
    committer: user;
    parents: array;
    sha: string;
    url: string;
}
export interface object_3 {
    author: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        email: string;
        name: string;
    };
    committer: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        email: string;
        name: string;
    };
    message: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
export interface object_4 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    email: string;
    name: string;
}
export interface object_5 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    email: string;
    name: string;
}
export interface object_6 {
    sha: string;
    url: string;
}
export interface object_7 {
    sha: string;
    url: string;
}
export interface object_8 {
    commit: {
        sha: string;
        url: string;
    };
    name: string;
}
export interface object_9 {
    sha: string;
    url: string;
}
export interface object_10 {
    body: string;
    /**
     * @description ISO 8601.
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    id: int64;
    url: string;
    user: user;
}
export interface object_11 {
    author: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        email: string;
        name: string;
    };
    committer: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        email: string;
        name: string;
    };
    message: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
export interface object_12 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    email: string;
    name: string;
}
export interface object_13 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    email: string;
    name: string;
}
export interface object_14 {
    sha: string;
    url: string;
}
export interface object_15 {
    additions: int64;
    blob_url: string;
    changes: int64;
    deletions: int64;
    filename: string;
    patch: string;
    raw_url: string;
    status: string;
}
export interface object_16 {
    sha: string;
    url: string;
}
export interface object_17 {
    additions: int64;
    deletions: int64;
    total: int64;
}
export interface object_18 {
    days: array;
    total: int64;
    week: int64;
}
export interface object_19 {
    author: user;
    commit: {
        author: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
            email: string;
            name: string;
        };
        committer: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
            email: string;
            name: string;
        };
        message: string;
        tree: {
            sha: string;
            url: string;
        };
        url: string;
    };
    committer: user;
    parents: array;
    sha: string;
    url: string;
}
export interface object_20 {
    author: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        email: string;
        name: string;
    };
    committer: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        email: string;
        name: string;
    };
    message: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
export interface object_21 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    email: string;
    name: string;
}
export interface object_22 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    email: string;
    name: string;
}
export interface object_23 {
    sha: string;
    url: string;
}
export interface object_24 {
    sha: string;
    url: string;
}
export interface object_25 {
    author: user;
    commit: {
        author: {
            date: string;
            email: string;
            name: string;
        };
        committer: {
            date: string;
            email: string;
            name: string;
        };
        message: string;
        tree: {
            sha: string;
            url: string;
        };
        url: string;
    };
    committer: user;
    parents: array;
    sha: string;
    url: string;
}
export interface object_26 {
    author: {
        date: string;
        email: string;
        name: string;
    };
    committer: {
        date: string;
        email: string;
        name: string;
    };
    message: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
export interface object_27 {
    date: string;
    email: string;
    name: string;
}
export interface object_28 {
    date: string;
    email: string;
    name: string;
}
export interface object_29 {
    sha: string;
    url: string;
}
export interface object_30 {
    sha: string;
    url: string;
}
export interface object_31 {
    author: user;
    commit: {
        author: {
            date: string;
            email: string;
            name: string;
        };
        committer: {
            date: string;
            email: string;
            name: string;
        };
        message: string;
        tree: {
            sha: string;
            url: string;
        };
        url: string;
    };
    committer: user;
    parents: array;
    sha: string;
    url: string;
}
export interface object_32 {
    author: {
        date: string;
        email: string;
        name: string;
    };
    committer: {
        date: string;
        email: string;
        name: string;
    };
    message: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
export interface object_33 {
    date: string;
    email: string;
    name: string;
}
export interface object_34 {
    date: string;
    email: string;
    name: string;
}
export interface object_35 {
    sha: string;
    url: string;
}
export interface object_36 {
    sha: string;
    url: string;
}
export interface object_37 {
    additions: int64;
    blob_url: string;
    changes: int64;
    contents_url: string;
    deletions: int64;
    filename: string;
    patch: string;
    raw_url: string;
    sha: string;
    status: string;
}
export interface object_38 {
    git: string;
    html: string;
    self: string;
}
export interface object_39 {
    author: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
    /**
     * @description The Total number of commits authored by the contributor.
     */
    total: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    weeks: array;
}
export interface object_40 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_41 {
    /**
     * @description Number of additions.
     */
    a: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of commits.
     */
    c: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Number of deletions.
     */
    d: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Start of the week.
     */
    w: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
export interface object_42 {
    author: {
        date: string;
        email: string;
        name: string;
    };
    committer: {
        date: string;
        email: string;
        name: string;
    };
    html_url: string;
    message: string;
    parents: array;
    sha: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
export interface object_43 {
    date: string;
    email: string;
    name: string;
}
export interface object_44 {
    date: string;
    email: string;
    name: string;
}
export interface object_45 {
    html_url: string;
    sha: string;
    url: string;
}
export interface object_46 {
    sha: string;
    url: string;
}
export interface object_47 {
    _links: {
        git: string;
        html: string;
        self: string;
    };
    git_url: string;
    html_url: string;
    name: string;
    path: string;
    sha: string;
    size: int64;
    type: string;
    url: string;
}
export interface object_48 {
    git: string;
    html: string;
    self: string;
}
export interface object_49 {
    email: string;
    name: string;
}
export interface object_50 {
    author: {
        date: string;
        email: string;
        name: string;
    };
    committer: {
        date: string;
        email: string;
        name: string;
    };
    html_url: string;
    message: string;
    parents: {
        html_url: string;
        sha: string;
        url: string;
    };
    sha: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
export interface object_51 {
    date: string;
    email: string;
    name: string;
}
export interface object_52 {
    date: string;
    email: string;
    name: string;
}
export interface object_53 {
    html_url: string;
    sha: string;
    url: string;
}
export interface object_54 {
    sha: string;
    url: string;
}
export interface object_55 {
    email: string;
    name: string;
}
export interface object_56 {
    deploy_user: string;
    environment: string;
    room_id: double;
}
export interface object_57 {
    created_at: string;
    creator: user;
    description: string;
    id: int64;
    payload: string;
    state: string;
    target_url: string;
    updated_at: string;
    url: string;
}
export interface object_58 {
}
export interface object_59 {
}
export interface object_60 {
    id: int64;
    name: string;
    url: string;
}
export interface object_61 {
    current_user: {
        href: string;
        type: string;
    };
    current_user_actor: {
        href: string;
        type: string;
    };
    current_user_organization: {
        href: string;
        type: string;
    };
    current_user_public: {
        href: string;
        type: string;
    };
    timeline: {
        href: string;
        type: string;
    };
    user: {
        href: string;
        type: string;
    };
}
export interface object_62 {
    href: string;
    type: string;
}
export interface object_63 {
    href: string;
    type: string;
}
export interface object_64 {
    href: string;
    type: string;
}
export interface object_65 {
    href: string;
    type: string;
}
export interface object_66 {
    href: string;
    type: string;
}
export interface object_67 {
    href: string;
    type: string;
}
export interface object_68 extends repo {
}
export interface object_69 extends repo {
}
export interface object_70 {
    'ring.erl': {
        filename: string;
        raw_url: string;
        size: int64;
    };
}
export interface object_71 {
    filename: string;
    raw_url: string;
    size: int64;
}
export interface object_72 {
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
}
export interface object_73 {
    change_status: {
        additions: int64;
        deletions: int64;
        total: int64;
    };
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    committed_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
    version: string;
}
export interface object_74 {
    additions: int64;
    deletions: int64;
    total: int64;
}
export interface object_75 {
    comments: int64;
    comments_url: string;
    created_at: string;
    description: string;
    files: {
        'ring.erl': {
            filename: string;
            raw_url: string;
            size: int64;
        };
    };
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    id: string;
    public: boolean;
    url: string;
    user: user;
}
export interface object_76 {
    'ring.erl': {
        filename: string;
        raw_url: string;
        size: int64;
    };
}
export interface object_77 {
    filename: string;
    raw_url: string;
    size: int64;
}
export interface object_78 {
    date: string;
    email: string;
    name: string;
}
export interface object_79 {
    sha: string;
    type: string;
    url: string;
}
export interface object_80 {
    active: boolean;
    config: {
        content_type: string;
        url: string;
    };
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    events: array;
    id: int64;
    name: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
}
export interface object_81 {
    content_type: string;
    url: string;
}
export interface object_82 {
    assignee: user;
    body: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    closed_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    comments: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    html_url: string;
    labels: array;
    milestone: {
        closed_issues: int64;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        creator: user;
        description: string;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        due_on: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        number: int64;
        open_issues: int64;
        state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        title: string;
        url: string;
    };
    number: int64;
    pull_request: {
        diff_url: string;
        html_url: string;
        patch_url: string;
    };
    state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    title: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
}
export interface object_83 {
    color: string;
    name: string;
    url: string;
}
export interface object_84 {
    closed_issues: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    creator: user;
    description: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    due_on: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    number: int64;
    open_issues: int64;
    state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    title: string;
    url: string;
}
export interface object_85 {
    diff_url: string;
    html_url: string;
    patch_url: string;
}
export interface object_86 {
    assignee: user;
    body: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    closed_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    comments: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    html_url: string;
    labels: array;
    milestone: {
        closed_issues: int64;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        creator: user;
        description: string;
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        due_on: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        number: int64;
        open_issues: int64;
        state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
        title: string;
        url: string;
    };
    number: int64;
    pull_request: {
        diff_url: string;
        html_url: string;
        patch_url: string;
    };
    state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    title: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
}
export interface object_87 {
    color: string;
    name: string;
    url: string;
}
export interface object_88 {
    closed_issues: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    creator: user;
    description: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    due_on: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    number: int64;
    open_issues: int64;
    state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    title: string;
    url: string;
}
export interface object_89 {
    diff_url: string;
    html_url: string;
    patch_url: string;
}
export interface object_90 {
    _links: {
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
        self: {
            href: string;
        };
    };
    body: string;
    commit_id: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    id: int64;
    path: string;
    position: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
}
export interface object_91 {
    html: {
        href: string;
    };
    pull_request: {
        href: string;
    };
    self: {
        href: string;
    };
}
export interface object_92 {
    href: string;
}
export interface object_93 {
    href: string;
}
export interface object_94 {
    href: string;
}
export interface object_95 {
    id: int64;
    key: string;
    title: string;
    url: string;
}
export interface object_96 {
    color: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    name: string;
    url: string;
}
export interface object_97 {
    author: {
        date: string;
        email: string;
        name: string;
    };
    comment_count: int64;
    committer: {
        date: string;
        email: string;
        name: string;
    };
    message: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
}
export interface object_98 {
    date: string;
    email: string;
    name: string;
}
export interface object_99 {
    date: string;
    email: string;
    name: string;
}
export interface object_100 {
    sha: string;
    url: string;
}
export interface object_101 {
    sha: string;
    url: string;
}
export interface object_102 {
    description: string;
    fork: boolean;
    full_name: string;
    html_url: string;
    id: int64;
    name: string;
    owner: actor;
    private: boolean;
    url: string;
}
export interface object_103 {
    latest_comment_url: string;
    title: string;
    type: string;
    url: string;
}
export interface object_104 {
    code: string;
    field: string;
    resource: string;
}
export interface object_105 {
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
}
export interface object_106 {
    content: string;
}
export interface object_107 {
    content: string;
}
export interface object_108 {
    content: string;
    filename: string;
}
export interface object_109 {
    'file1.txt': {
        content: string;
    };
}
export interface object_110 {
    content: string;
}
export interface object_111 {
    comments: {
        href: string;
    };
    html: {
        href: string;
    };
    review_comments: {
        href: string;
    };
    self: {
        href: string;
    };
}
export interface object_112 {
    href: string;
}
export interface object_113 {
    href: string;
}
export interface object_114 {
    href: string;
}
export interface object_115 {
    href: string;
}
export interface object_116 {
    label: string;
    ref: string;
    repo: repo;
    sha: string;
    user: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
}
export interface object_117 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_118 {
    label: string;
    ref: string;
    repo: repo;
    sha: string;
    user: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
}
export interface object_119 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_120 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_121 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_122 {
    _links: {
        comments: {
            href: string;
        };
        html: {
            href: string;
        };
        review_comments: {
            href: string;
        };
        self: {
            href: string;
        };
    };
    base: {
        label: string;
        ref: string;
        repo: repo;
        sha: string;
        user: {
            avatar_url: string;
            gravatar_id: string;
            id: int64;
            login: string;
            url: string;
        };
    };
    body: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    closed_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    diff_url: string;
    head: {
        label: string;
        ref: string;
        repo: repo;
        sha: string;
        user: {
            avatar_url: string;
            gravatar_id: string;
            id: int64;
            login: string;
            url: string;
        };
    };
    html_url: string;
    issue_url: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    merged_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    number: int64;
    patch_url: string;
    state: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    title: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
}
export interface object_123 {
    comments: {
        href: string;
    };
    html: {
        href: string;
    };
    review_comments: {
        href: string;
    };
    self: {
        href: string;
    };
}
export interface object_124 {
    href: string;
}
export interface object_125 {
    href: string;
}
export interface object_126 {
    href: string;
}
export interface object_127 {
    href: string;
}
export interface object_128 {
    label: string;
    ref: string;
    repo: repo;
    sha: string;
    user: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
}
export interface object_129 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_130 {
    label: string;
    ref: string;
    repo: repo;
    sha: string;
    user: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
}
export interface object_131 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_132 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_133 {
    html: {
        href: string;
    };
    pull_request: {
        href: string;
    };
    self: {
        href: string;
    };
}
export interface object_134 {
    href: string;
}
export interface object_135 {
    href: string;
}
export interface object_136 {
    href: string;
}
export interface object_137 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_138 {
    _links: {
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
        self: {
            href: string;
        };
    };
    body: string;
    commit_id: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    id: int64;
    path: string;
    position: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
}
export interface object_139 {
    html: {
        href: string;
    };
    pull_request: {
        href: string;
    };
    self: {
        href: string;
    };
}
export interface object_140 {
    href: string;
}
export interface object_141 {
    href: string;
}
export interface object_142 {
    href: string;
}
export interface object_143 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_144 {
}
export interface object_145 {
    limit: int64;
    remaining: int64;
    reset: int64;
}
export interface object_146 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    creator: {
        avatar_url: string;
        gravatar_id: string;
        id: int64;
        login: string;
        url: string;
    };
    description: string;
    id: int64;
    state: string;
    target_url: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
}
export interface object_147 {
    avatar_url: string;
    gravatar_id: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_148 {
    commit_url: string;
    name: string;
    repository_url: string;
    sha: string;
    state: string;
    statuses: array;
}
export interface object_149 {
    context: string;
    created_at: string;
    description: string;
    id: double;
    state: string;
    target_url: string;
    updated_at: string;
    url: string;
}
export interface object_150 {
    object: {
        sha: string;
        type: string;
        url: string;
    };
    ref: string;
    url: string;
}
export interface object_151 {
    sha: string;
    type: string;
    url: string;
}
export interface object_152 {
    content_type: string;
    created_at: string;
    download_count: int64;
    id: int64;
    label: string;
    name: string;
    size: int64;
    state: string;
    updated_at: string;
    uploader: user;
    url: string;
}
export interface object_153 {
    assets: unknown /*= (not tsschema -- undefinedassets/undefined ) =*/;
    assets_url: string;
    author: user;
    body: string;
    created_at: string;
    draft: boolean;
    html_url: string;
    id: int64;
    name: string;
    prerelease: boolean;
    published_at: string;
    tag_name: string;
    tarball_url: string;
    target_commitish: string;
    upload_url: string;
    url: string;
    zipball_url: string;
}
export interface object_154 {
    content_type: string;
    created_at: string;
    download_count: int64;
    id: int64;
    label: string;
    name: string;
    size: int64;
    state: string;
    updated_at: string;
    uploader: user;
    url: string;
}
export interface object_155 {
    created_at: string;
    creator: user;
    description: string;
    id: int64;
    payload: string;
    sha: string;
    statuses_url: string;
    updated_at: string;
    url: string;
}
export interface object_156 {
    body: string;
    commit_id: string;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    html_url: string;
    id: int64;
    line: int64;
    path: string;
    position: int64;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
    user: user;
}
export interface object_157 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    email: string;
    name: string;
}
export interface object_158 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    email: string;
    name: string;
}
export interface object_159 {
    sha: string;
    url: string;
}
export interface object_160 {
    sha: string;
    url: string;
}
export interface object_161 {
    date: string;
    email: string;
    name: string;
}
export interface object_162 {
    git_url: string;
    html_url: string;
    name: string;
    path: string;
    repository: {
        archive_url: string;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        contributors_url: string;
        description: string;
        downloads_url: string;
        events_url: string;
        fork: boolean;
        forks_url: string;
        full_name: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        hooks_url: string;
        html_url: string;
        id: int64;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        languages_url: string;
        merges_url: string;
        milestones_url: string;
        name: string;
        notifications_url: string;
        owner: actor;
        private: boolean;
        pulls_url: string;
        stargazers_url: string;
        statuses_url: string;
        subscribers_url: string;
        subscription_url: string;
        tags_url: string;
        teams_url: string;
        trees_url: string;
        url: string;
    };
    score: double;
    sha: string;
    url: string;
}
export interface object_163 {
    archive_url: string;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    description: string;
    downloads_url: string;
    events_url: string;
    fork: boolean;
    forks_url: string;
    full_name: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    hooks_url: string;
    html_url: string;
    id: int64;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string;
    merges_url: string;
    milestones_url: string;
    name: string;
    notifications_url: string;
    owner: actor;
    private: boolean;
    pulls_url: string;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    tags_url: string;
    teams_url: string;
    trees_url: string;
    url: string;
}
export interface object_164 {
    assignee: any;
    body: string;
    closed_at: any;
    comments: int64;
    comments_url: string;
    created_at: string;
    events_url: string;
    html_url: string;
    id: int64;
    labels: array;
    labels_url: string;
    milestone: any;
    number: int64;
    pull_request: {
        diff_url: any;
        html_url: any;
        patch_url: any;
    };
    score: double;
    state: string;
    title: string;
    updated_at: string;
    url: string;
    user: user;
}
export interface object_165 {
    color: string;
    name: string;
    url: string;
}
export interface object_166 {
    diff_url: any;
    html_url: any;
    patch_url: any;
}
export interface object_167 {
    body: string;
    comments: int64;
    created_at: string;
    gravatar_id: string;
    html_url: string;
    labels: array;
    number: int64;
    position: int64;
    state: string;
    title: string;
    updated_at: string;
    user: string;
    votes: int64;
}
export interface object_168 {
    sha: string;
    /**
     * @description String of the type of the tagged object. Normally this is a commit but it can also be a tree or a blob.
     */
    type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
}
export interface object_169 {
    /**
     * @description Timestamp of when this object was tagged, in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description String of the email of the author of the tag.
     */
    email: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description String of the name of the author of the tag.
     */
    name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
export interface object_170 {
    /**
     * @description Timestamp of when this object was tagged, in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description String of the email of the author of the tag.
     */
    email: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description String of the name of the author of the tag.
     */
    name: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
export interface object_171 {
    id: int64;
    name: string;
    url: string;
}
export interface object_172 {
    id: int64;
    members_count: int64;
    name: string;
    organization: {
        avatar_url: string;
        id: int64;
        login: string;
        url: string;
    };
    permission: string;
    repos_count: int64;
    url: string;
}
export interface object_173 {
    avatar_url: string;
    id: int64;
    login: string;
    url: string;
}
export interface object_174 {
    /**
     * @description One of 100644 for file (blob), 100755 for executable (blob), 040000 for subdirectory (tree), 160000 for submodule (commit) or 120000 for a blob that specifies the path of a symlink.
     */
    mode: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    path: string;
    /**
     * @description SHA1 checksum ID of the object in the tree.
     */
    sha: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    size: int64;
    type: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    url: string;
}
