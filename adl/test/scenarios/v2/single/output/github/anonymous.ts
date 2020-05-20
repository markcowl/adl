import { actor } from './models/actor';
import { repo } from './models/repo';
import { user } from './models/user';
export interface object_0 {
    collaborators: any;
    name: any;
    private_repos: any;
    space: any;
}
export interface object_1 {
    html: any;
    self: any;
}
export interface object_2 {
    author: user;
    commit: {
        author: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: any;
            email: any;
            name: any;
        };
        committer: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: any;
            email: any;
            name: any;
        };
        message: any;
        tree: {
            sha: any;
            url: any;
        };
        url: any;
    };
    committer: user;
    parents: any;
    sha: any;
    url: any;
}
export interface object_3 {
    author: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: any;
        email: any;
        name: any;
    };
    committer: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: any;
        email: any;
        name: any;
    };
    message: any;
    tree: {
        sha: any;
        url: any;
    };
    url: any;
}
export interface object_4 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_5 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_6 {
    sha: any;
    url: any;
}
export interface object_7 {
    sha: any;
    url: any;
}
export interface object_8 {
    commit: {
        sha: any;
        url: any;
    };
    name: any;
}
export interface object_9 {
    sha: any;
    url: any;
}
export interface object_10 {
    body: any;
    /**
     * @description ISO 8601.
     */
    created_at: any;
    id: any;
    url: any;
    user: user;
}
export interface object_11 {
    author: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: any;
        email: any;
        name: any;
    };
    committer: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: any;
        email: any;
        name: any;
    };
    message: any;
    tree: {
        sha: any;
        url: any;
    };
    url: any;
}
export interface object_12 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_13 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_14 {
    sha: any;
    url: any;
}
export interface object_15 {
    additions: any;
    blob_url: any;
    changes: any;
    deletions: any;
    filename: any;
    patch: any;
    raw_url: any;
    status: any;
}
export interface object_16 {
    sha: any;
    url: any;
}
export interface object_17 {
    additions: any;
    deletions: any;
    total: any;
}
export interface object_18 {
    days: any;
    total: any;
    week: any;
}
export interface object_19 {
    author: user;
    commit: {
        author: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: any;
            email: any;
            name: any;
        };
        committer: {
            /**
             * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
             */
            date: any;
            email: any;
            name: any;
        };
        message: any;
        tree: {
            sha: any;
            url: any;
        };
        url: any;
    };
    committer: user;
    parents: any;
    sha: any;
    url: any;
}
export interface object_20 {
    author: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: any;
        email: any;
        name: any;
    };
    committer: {
        /**
         * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
         */
        date: any;
        email: any;
        name: any;
    };
    message: any;
    tree: {
        sha: any;
        url: any;
    };
    url: any;
}
export interface object_21 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_22 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_23 {
    sha: any;
    url: any;
}
export interface object_24 {
    sha: any;
    url: any;
}
export interface object_25 {
    author: user;
    commit: {
        author: {
            date: any;
            email: any;
            name: any;
        };
        committer: {
            date: any;
            email: any;
            name: any;
        };
        message: any;
        tree: {
            sha: any;
            url: any;
        };
        url: any;
    };
    committer: user;
    parents: any;
    sha: any;
    url: any;
}
export interface object_26 {
    author: {
        date: any;
        email: any;
        name: any;
    };
    committer: {
        date: any;
        email: any;
        name: any;
    };
    message: any;
    tree: {
        sha: any;
        url: any;
    };
    url: any;
}
export interface object_27 {
    date: any;
    email: any;
    name: any;
}
export interface object_28 {
    date: any;
    email: any;
    name: any;
}
export interface object_29 {
    sha: any;
    url: any;
}
export interface object_30 {
    sha: any;
    url: any;
}
export interface object_31 {
    author: user;
    commit: {
        author: {
            date: any;
            email: any;
            name: any;
        };
        committer: {
            date: any;
            email: any;
            name: any;
        };
        message: any;
        tree: {
            sha: any;
            url: any;
        };
        url: any;
    };
    committer: user;
    parents: any;
    sha: any;
    url: any;
}
export interface object_32 {
    author: {
        date: any;
        email: any;
        name: any;
    };
    committer: {
        date: any;
        email: any;
        name: any;
    };
    message: any;
    tree: {
        sha: any;
        url: any;
    };
    url: any;
}
export interface object_33 {
    date: any;
    email: any;
    name: any;
}
export interface object_34 {
    date: any;
    email: any;
    name: any;
}
export interface object_35 {
    sha: any;
    url: any;
}
export interface object_36 {
    sha: any;
    url: any;
}
export interface object_37 {
    additions: any;
    blob_url: any;
    changes: any;
    contents_url: any;
    deletions: any;
    filename: any;
    patch: any;
    raw_url: any;
    sha: any;
    status: any;
}
export interface object_38 {
    git: any;
    html: any;
    self: any;
}
export interface object_39 {
    author: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
    /**
     * @description The Total number of commits authored by the contributor.
     */
    total: any;
    weeks: any;
}
export interface object_40 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_41 {
    /**
     * @description Number of additions.
     */
    a: any;
    /**
     * @description Number of commits.
     */
    c: any;
    /**
     * @description Number of deletions.
     */
    d: any;
    /**
     * @description Start of the week.
     */
    w: any;
}
export interface object_42 {
    author: {
        date: any;
        email: any;
        name: any;
    };
    committer: {
        date: any;
        email: any;
        name: any;
    };
    html_url: any;
    message: any;
    parents: any;
    sha: any;
    tree: {
        sha: any;
        url: any;
    };
    url: any;
}
export interface object_43 {
    date: any;
    email: any;
    name: any;
}
export interface object_44 {
    date: any;
    email: any;
    name: any;
}
export interface object_45 {
    html_url: any;
    sha: any;
    url: any;
}
export interface object_46 {
    sha: any;
    url: any;
}
export interface object_47 {
    _links: {
        git: any;
        html: any;
        self: any;
    };
    git_url: any;
    html_url: any;
    name: any;
    path: any;
    sha: any;
    size: any;
    type: any;
    url: any;
}
export interface object_48 {
    git: any;
    html: any;
    self: any;
}
export interface object_49 {
    email: any;
    name: any;
}
export interface object_50 {
    author: {
        date: any;
        email: any;
        name: any;
    };
    committer: {
        date: any;
        email: any;
        name: any;
    };
    html_url: any;
    message: any;
    parents: {
        html_url: any;
        sha: any;
        url: any;
    };
    sha: any;
    tree: {
        sha: any;
        url: any;
    };
    url: any;
}
export interface object_51 {
    date: any;
    email: any;
    name: any;
}
export interface object_52 {
    date: any;
    email: any;
    name: any;
}
export interface object_53 {
    html_url: any;
    sha: any;
    url: any;
}
export interface object_54 {
    sha: any;
    url: any;
}
export interface object_55 {
    email: any;
    name: any;
}
export interface object_56 {
    deploy_user: any;
    environment: any;
    room_id: any;
}
export interface object_57 {
    created_at: any;
    creator: user;
    description: any;
    id: any;
    payload: any;
    state: any;
    target_url: any;
    updated_at: any;
    url: any;
}
export interface object_58 {
}
export interface object_59 {
}
export interface object_60 {
    id: any;
    name: any;
    url: any;
}
export interface object_61 {
    current_user: {
        href: any;
        type: any;
    };
    current_user_actor: {
        href: any;
        type: any;
    };
    current_user_organization: {
        href: any;
        type: any;
    };
    current_user_public: {
        href: any;
        type: any;
    };
    timeline: {
        href: any;
        type: any;
    };
    user: {
        href: any;
        type: any;
    };
}
export interface object_62 {
    href: any;
    type: any;
}
export interface object_63 {
    href: any;
    type: any;
}
export interface object_64 {
    href: any;
    type: any;
}
export interface object_65 {
    href: any;
    type: any;
}
export interface object_66 {
    href: any;
    type: any;
}
export interface object_67 {
    href: any;
    type: any;
}
export interface object_68 extends repo {
}
export interface object_69 extends repo {
}
export interface object_70 {
    'ring.erl': {
        filename: any;
        raw_url: any;
        size: any;
    };
}
export interface object_71 {
    filename: any;
    raw_url: any;
    size: any;
}
export interface object_72 {
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    created_at: any;
    url: any;
    user: user;
}
export interface object_73 {
    change_status: {
        additions: any;
        deletions: any;
        total: any;
    };
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    committed_at: any;
    url: any;
    user: user;
    version: any;
}
export interface object_74 {
    additions: any;
    deletions: any;
    total: any;
}
export interface object_75 {
    comments: any;
    comments_url: any;
    created_at: any;
    description: any;
    files: {
        'ring.erl': {
            filename: any;
            raw_url: any;
            size: any;
        };
    };
    git_pull_url: any;
    git_push_url: any;
    html_url: any;
    id: any;
    public: any;
    url: any;
    user: user;
}
export interface object_76 {
    'ring.erl': {
        filename: any;
        raw_url: any;
        size: any;
    };
}
export interface object_77 {
    filename: any;
    raw_url: any;
    size: any;
}
export interface object_78 {
    date: any;
    email: any;
    name: any;
}
export interface object_79 {
    sha: any;
    type: any;
    url: any;
}
export interface object_80 {
    active: any;
    config: {
        content_type: any;
        url: any;
    };
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    events: any;
    id: any;
    name: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
}
export interface object_81 {
    content_type: any;
    url: any;
}
export interface object_82 {
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
}
export interface object_83 {
    color: any;
    name: any;
    url: any;
}
export interface object_84 {
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
}
export interface object_85 {
    diff_url: any;
    html_url: any;
    patch_url: any;
}
export interface object_86 {
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
}
export interface object_87 {
    color: any;
    name: any;
    url: any;
}
export interface object_88 {
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
}
export interface object_89 {
    diff_url: any;
    html_url: any;
    patch_url: any;
}
export interface object_90 {
    _links: {
        html: {
            href: any;
        };
        pull_request: {
            href: any;
        };
        self: {
            href: any;
        };
    };
    body: any;
    commit_id: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    id: any;
    path: any;
    position: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
    user: user;
}
export interface object_91 {
    html: {
        href: any;
    };
    pull_request: {
        href: any;
    };
    self: {
        href: any;
    };
}
export interface object_92 {
    href: any;
}
export interface object_93 {
    href: any;
}
export interface object_94 {
    href: any;
}
export interface object_95 {
    id: any;
    key: any;
    title: any;
    url: any;
}
export interface object_96 {
    color: any;
    name: any;
    url: any;
}
export interface object_97 {
    author: {
        date: any;
        email: any;
        name: any;
    };
    comment_count: any;
    committer: {
        date: any;
        email: any;
        name: any;
    };
    message: any;
    tree: {
        sha: any;
        url: any;
    };
    url: any;
}
export interface object_98 {
    date: any;
    email: any;
    name: any;
}
export interface object_99 {
    date: any;
    email: any;
    name: any;
}
export interface object_100 {
    sha: any;
    url: any;
}
export interface object_101 {
    sha: any;
    url: any;
}
export interface object_102 {
    description: any;
    fork: any;
    full_name: any;
    html_url: any;
    id: any;
    name: any;
    owner: actor;
    private: any;
    url: any;
}
export interface object_103 {
    latest_comment_url: any;
    title: any;
    type: any;
    url: any;
}
export interface object_104 {
    code: any;
    field: any;
    resource: any;
}
export interface object_105 {
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
}
export interface object_106 {
    content: any;
}
export interface object_107 {
    content: any;
}
export interface object_108 {
    content: any;
    filename: any;
}
export interface object_109 {
    'file1.txt': {
        content: any;
    };
}
export interface object_110 {
    content: any;
}
export interface object_111 {
    comments: {
        href: any;
    };
    html: {
        href: any;
    };
    review_comments: {
        href: any;
    };
    self: {
        href: any;
    };
}
export interface object_112 {
    href: any;
}
export interface object_113 {
    href: any;
}
export interface object_114 {
    href: any;
}
export interface object_115 {
    href: any;
}
export interface object_116 {
    label: any;
    ref: any;
    repo: repo;
    sha: any;
    user: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
}
export interface object_117 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_118 {
    label: any;
    ref: any;
    repo: repo;
    sha: any;
    user: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
}
export interface object_119 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_120 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_121 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_122 {
    _links: {
        comments: {
            href: any;
        };
        html: {
            href: any;
        };
        review_comments: {
            href: any;
        };
        self: {
            href: any;
        };
    };
    base: {
        label: any;
        ref: any;
        repo: repo;
        sha: any;
        user: {
            avatar_url: any;
            gravatar_id: any;
            id: any;
            login: any;
            url: any;
        };
    };
    body: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    closed_at: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    diff_url: any;
    head: {
        label: any;
        ref: any;
        repo: repo;
        sha: any;
        user: {
            avatar_url: any;
            gravatar_id: any;
            id: any;
            login: any;
            url: any;
        };
    };
    html_url: any;
    issue_url: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    merged_at: any;
    number: any;
    patch_url: any;
    state: any;
    title: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
    user: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
}
export interface object_123 {
    comments: {
        href: any;
    };
    html: {
        href: any;
    };
    review_comments: {
        href: any;
    };
    self: {
        href: any;
    };
}
export interface object_124 {
    href: any;
}
export interface object_125 {
    href: any;
}
export interface object_126 {
    href: any;
}
export interface object_127 {
    href: any;
}
export interface object_128 {
    label: any;
    ref: any;
    repo: repo;
    sha: any;
    user: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
}
export interface object_129 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_130 {
    label: any;
    ref: any;
    repo: repo;
    sha: any;
    user: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
}
export interface object_131 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_132 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_133 {
    html: {
        href: any;
    };
    pull_request: {
        href: any;
    };
    self: {
        href: any;
    };
}
export interface object_134 {
    href: any;
}
export interface object_135 {
    href: any;
}
export interface object_136 {
    href: any;
}
export interface object_137 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_138 {
    _links: {
        html: {
            href: any;
        };
        pull_request: {
            href: any;
        };
        self: {
            href: any;
        };
    };
    body: any;
    commit_id: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    id: any;
    path: any;
    position: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
    user: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
}
export interface object_139 {
    html: {
        href: any;
    };
    pull_request: {
        href: any;
    };
    self: {
        href: any;
    };
}
export interface object_140 {
    href: any;
}
export interface object_141 {
    href: any;
}
export interface object_142 {
    href: any;
}
export interface object_143 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_144 {
}
export interface object_145 {
    limit: any;
    remaining: any;
    reset: any;
}
export interface object_146 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    creator: {
        avatar_url: any;
        gravatar_id: any;
        id: any;
        login: any;
        url: any;
    };
    description: any;
    id: any;
    state: any;
    target_url: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
}
export interface object_147 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_148 {
    commit_url: any;
    name: any;
    repository_url: any;
    sha: any;
    state: any;
    statuses: any;
}
export interface object_149 {
    context: any;
    created_at: any;
    description: any;
    id: any;
    state: any;
    target_url: any;
    updated_at: any;
    url: any;
}
export interface object_150 {
    object: {
        sha: any;
        type: any;
        url: any;
    };
    ref: any;
    url: any;
}
export interface object_151 {
    sha: any;
    type: any;
    url: any;
}
export interface object_152 {
    content_type: any;
    created_at: any;
    download_count: any;
    id: any;
    label: any;
    name: any;
    size: any;
    state: any;
    updated_at: any;
    uploader: user;
    url: any;
}
export interface object_153 {
    assets: any;
    assets_url: any;
    author: user;
    body: any;
    created_at: any;
    draft: any;
    html_url: any;
    id: any;
    name: any;
    prerelease: any;
    published_at: any;
    tag_name: any;
    tarball_url: any;
    target_commitish: any;
    upload_url: any;
    url: any;
    zipball_url: any;
}
export interface object_154 {
    content_type: any;
    created_at: any;
    download_count: any;
    id: any;
    label: any;
    name: any;
    size: any;
    state: any;
    updated_at: any;
    uploader: user;
    url: any;
}
export interface object_155 {
    created_at: any;
    creator: user;
    description: any;
    id: any;
    payload: any;
    sha: any;
    statuses_url: any;
    updated_at: any;
    url: any;
}
export interface object_156 {
    body: any;
    commit_id: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    html_url: any;
    id: any;
    line: any;
    path: any;
    position: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
    user: user;
}
export interface object_157 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_158 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_159 {
    sha: any;
    url: any;
}
export interface object_160 {
    sha: any;
    url: any;
}
export interface object_161 {
    date: any;
    email: any;
    name: any;
}
export interface object_162 {
    git_url: any;
    html_url: any;
    name: any;
    path: any;
    repository: {
        archive_url: any;
        assignees_url: any;
        blobs_url: any;
        branches_url: any;
        collaborators_url: any;
        comments_url: any;
        commits_url: any;
        compare_url: any;
        contents_url: any;
        contributors_url: any;
        description: any;
        downloads_url: any;
        events_url: any;
        fork: any;
        forks_url: any;
        full_name: any;
        git_commits_url: any;
        git_refs_url: any;
        git_tags_url: any;
        hooks_url: any;
        html_url: any;
        id: any;
        issue_comment_url: any;
        issue_events_url: any;
        issues_url: any;
        keys_url: any;
        labels_url: any;
        languages_url: any;
        merges_url: any;
        milestones_url: any;
        name: any;
        notifications_url: any;
        owner: actor;
        private: any;
        pulls_url: any;
        stargazers_url: any;
        statuses_url: any;
        subscribers_url: any;
        subscription_url: any;
        tags_url: any;
        teams_url: any;
        trees_url: any;
        url: any;
    };
    score: any;
    sha: any;
    url: any;
}
export interface object_163 {
    archive_url: any;
    assignees_url: any;
    blobs_url: any;
    branches_url: any;
    collaborators_url: any;
    comments_url: any;
    commits_url: any;
    compare_url: any;
    contents_url: any;
    contributors_url: any;
    description: any;
    downloads_url: any;
    events_url: any;
    fork: any;
    forks_url: any;
    full_name: any;
    git_commits_url: any;
    git_refs_url: any;
    git_tags_url: any;
    hooks_url: any;
    html_url: any;
    id: any;
    issue_comment_url: any;
    issue_events_url: any;
    issues_url: any;
    keys_url: any;
    labels_url: any;
    languages_url: any;
    merges_url: any;
    milestones_url: any;
    name: any;
    notifications_url: any;
    owner: actor;
    private: any;
    pulls_url: any;
    stargazers_url: any;
    statuses_url: any;
    subscribers_url: any;
    subscription_url: any;
    tags_url: any;
    teams_url: any;
    trees_url: any;
    url: any;
}
export interface object_164 {
    assignee: any;
    body: any;
    closed_at: any;
    comments: any;
    comments_url: any;
    created_at: any;
    events_url: any;
    html_url: any;
    id: any;
    labels: any;
    labels_url: any;
    milestone: any;
    number: any;
    pull_request: {
        diff_url: any;
        html_url: any;
        patch_url: any;
    };
    score: any;
    state: any;
    title: any;
    updated_at: any;
    url: any;
    user: user;
}
export interface object_165 {
    color: any;
    name: any;
    url: any;
}
export interface object_166 {
    diff_url: any;
    html_url: any;
    patch_url: any;
}
export interface object_167 {
    body: any;
    comments: any;
    created_at: any;
    gravatar_id: any;
    html_url: any;
    labels: any;
    number: any;
    position: any;
    state: any;
    title: any;
    updated_at: any;
    user: any;
    votes: any;
}
export interface object_168 {
    sha: any;
    /**
     * @description String of the type of the tagged object. Normally this is a commit but it can also be a tree or a blob.
     */
    type: any;
    url: any;
}
export interface object_169 {
    /**
     * @description Timestamp of when this object was tagged, in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    /**
     * @description String of the email of the author of the tag.
     */
    email: any;
    /**
     * @description String of the name of the author of the tag.
     */
    name: any;
}
export interface object_170 {
    /**
     * @description Timestamp of when this object was tagged, in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    /**
     * @description String of the email of the author of the tag.
     */
    email: any;
    /**
     * @description String of the name of the author of the tag.
     */
    name: any;
}
export interface object_171 {
    id: any;
    name: any;
    url: any;
}
export interface object_172 {
    id: any;
    members_count: any;
    name: any;
    organization: {
        avatar_url: any;
        id: any;
        login: any;
        url: any;
    };
    permission: any;
    repos_count: any;
    url: any;
}
export interface object_173 {
    avatar_url: any;
    id: any;
    login: any;
    url: any;
}
export interface object_174 {
    /**
     * @description One of 100644 for file (blob), 100755 for executable (blob), 040000 for subdirectory (tree), 160000 for submodule (commit) or 120000 for a blob that specifies the path of a symlink.
     */
    mode: any;
    path: any;
    /**
     * @description SHA1 checksum ID of the object in the tree.
     */
    sha: any;
    size: any;
    type: any;
    url: any;
}
