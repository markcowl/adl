import { actor } from './models/actor';
import { repo } from './models/repo';
import { user } from './models/user';
export interface object_12 {
    collaborators: any;
    name: any;
    private_repos: any;
    space: any;
}
export interface object_13 {
    html: any;
    self: any;
}
export interface object_14 {
    author: user;
    commit: object_15;
    committer: user;
    parents: any;
    sha: any;
    url: any;
}
export interface object_15 {
    author: object_16;
    committer: object_17;
    message: any;
    tree: object_18;
    url: any;
}
export interface object_16 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_17 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_18 {
    sha: any;
    url: any;
}
export interface object_19 {
    sha: any;
    url: any;
}
export interface object_20 {
    commit: object_21;
    name: any;
}
export interface object_21 {
    sha: any;
    url: any;
}
export interface object_22 {
    body: any;
    /**
     * @description ISO 8601.
     */
    created_at: any;
    id: any;
    url: any;
    user: user;
}
export interface object_23 {
    author: object_24;
    committer: object_25;
    message: any;
    tree: object_26;
    url: any;
}
export interface object_24 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_25 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_26 {
    sha: any;
    url: any;
}
export interface object_27 {
    additions: any;
    blob_url: any;
    changes: any;
    deletions: any;
    filename: any;
    patch: any;
    raw_url: any;
    status: any;
}
export interface object_28 {
    sha: any;
    url: any;
}
export interface object_29 {
    additions: any;
    deletions: any;
    total: any;
}
export interface object_30 {
    days: any;
    total: any;
    week: any;
}
export interface object_31 {
    author: user;
    commit: object_32;
    committer: user;
    parents: any;
    sha: any;
    url: any;
}
export interface object_32 {
    author: object_33;
    committer: object_34;
    message: any;
    tree: object_35;
    url: any;
}
export interface object_33 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_34 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
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
    author: user;
    commit: object_38;
    committer: user;
    parents: any;
    sha: any;
    url: any;
}
export interface object_38 {
    author: object_39;
    committer: object_40;
    message: any;
    tree: object_41;
    url: any;
}
export interface object_39 {
    date: any;
    email: any;
    name: any;
}
export interface object_40 {
    date: any;
    email: any;
    name: any;
}
export interface object_41 {
    sha: any;
    url: any;
}
export interface object_42 {
    sha: any;
    url: any;
}
export interface object_43 {
    author: user;
    commit: object_44;
    committer: user;
    parents: any;
    sha: any;
    url: any;
}
export interface object_44 {
    author: object_45;
    committer: object_46;
    message: any;
    tree: object_47;
    url: any;
}
export interface object_45 {
    date: any;
    email: any;
    name: any;
}
export interface object_46 {
    date: any;
    email: any;
    name: any;
}
export interface object_47 {
    sha: any;
    url: any;
}
export interface object_48 {
    sha: any;
    url: any;
}
export interface object_49 {
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
export interface object_50 {
    git: any;
    html: any;
    self: any;
}
export interface object_51 {
    author: object_52;
    /**
     * @description The Total number of commits authored by the contributor.
     */
    total: any;
    weeks: any;
}
export interface object_52 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_53 {
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
export interface object_54 {
    author: object_55;
    committer: object_56;
    html_url: any;
    message: any;
    parents: any;
    sha: any;
    tree: object_58;
    url: any;
}
export interface object_55 {
    date: any;
    email: any;
    name: any;
}
export interface object_56 {
    date: any;
    email: any;
    name: any;
}
export interface object_57 {
    html_url: any;
    sha: any;
    url: any;
}
export interface object_58 {
    sha: any;
    url: any;
}
export interface object_59 {
    _links: object_60;
    git_url: any;
    html_url: any;
    name: any;
    path: any;
    sha: any;
    size: any;
    type: any;
    url: any;
}
export interface object_60 {
    git: any;
    html: any;
    self: any;
}
export interface object_61 {
    email: any;
    name: any;
}
export interface object_62 {
    author: object_63;
    committer: object_64;
    html_url: any;
    message: any;
    parents: object_65;
    sha: any;
    tree: object_66;
    url: any;
}
export interface object_63 {
    date: any;
    email: any;
    name: any;
}
export interface object_64 {
    date: any;
    email: any;
    name: any;
}
export interface object_65 {
    html_url: any;
    sha: any;
    url: any;
}
export interface object_66 {
    sha: any;
    url: any;
}
export interface object_67 {
    email: any;
    name: any;
}
export interface object_68 {
    deploy_user: any;
    environment: any;
    room_id: any;
}
export interface object_69 {
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
export interface object_70 {
}
export interface object_71 {
}
export interface object_72 {
    id: any;
    name: any;
    url: any;
}
export interface object_73 {
    current_user: object_74;
    current_user_actor: object_75;
    current_user_organization: object_76;
    current_user_public: object_77;
    timeline: object_78;
    user: object_79;
}
export interface object_74 {
    href: any;
    type: any;
}
export interface object_75 {
    href: any;
    type: any;
}
export interface object_76 {
    href: any;
    type: any;
}
export interface object_77 {
    href: any;
    type: any;
}
export interface object_78 {
    href: any;
    type: any;
}
export interface object_79 {
    href: any;
    type: any;
}
export interface object_80 extends repo {
}
export interface object_81 extends repo {
}
export interface object_82 {
    'ring.erl': object_83;
}
export interface object_83 {
    filename: any;
    raw_url: any;
    size: any;
}
export interface object_84 {
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    created_at: any;
    url: any;
    user: user;
}
export interface object_85 {
    change_status: object_86;
    /**
     * @description Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     */
    committed_at: any;
    url: any;
    user: user;
    version: any;
}
export interface object_86 {
    additions: any;
    deletions: any;
    total: any;
}
export interface object_87 {
    comments: any;
    comments_url: any;
    created_at: any;
    description: any;
    files: object_88;
    git_pull_url: any;
    git_push_url: any;
    html_url: any;
    id: any;
    public: any;
    url: any;
    user: user;
}
export interface object_88 {
    'ring.erl': object_89;
}
export interface object_89 {
    filename: any;
    raw_url: any;
    size: any;
}
export interface object_90 {
    date: any;
    email: any;
    name: any;
}
export interface object_91 {
    sha: any;
    type: any;
    url: any;
}
export interface object_92 {
    active: any;
    config: object_93;
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
export interface object_93 {
    content_type: any;
    url: any;
}
export interface object_94 {
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
    milestone: object_96;
    number: any;
    pull_request: object_97;
    state: any;
    title: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
    user: user;
}
export interface object_95 {
    color: any;
    name: any;
    url: any;
}
export interface object_96 {
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
export interface object_97 {
    diff_url: any;
    html_url: any;
    patch_url: any;
}
export interface object_98 {
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
    milestone: object_100;
    number: any;
    pull_request: object_101;
    state: any;
    title: any;
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    updated_at: any;
    url: any;
    user: user;
}
export interface object_99 {
    color: any;
    name: any;
    url: any;
}
export interface object_100 {
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
export interface object_101 {
    diff_url: any;
    html_url: any;
    patch_url: any;
}
export interface object_102 {
    _links: object_103;
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
export interface object_103 {
    html: object_104;
    pull_request: object_105;
    self: object_106;
}
export interface object_104 {
    href: any;
}
export interface object_105 {
    href: any;
}
export interface object_106 {
    href: any;
}
export interface object_107 {
    id: any;
    key: any;
    title: any;
    url: any;
}
export interface object_108 {
    color: any;
    name: any;
    url: any;
}
export interface object_109 {
    author: object_110;
    comment_count: any;
    committer: object_111;
    message: any;
    tree: object_112;
    url: any;
}
export interface object_110 {
    date: any;
    email: any;
    name: any;
}
export interface object_111 {
    date: any;
    email: any;
    name: any;
}
export interface object_112 {
    sha: any;
    url: any;
}
export interface object_113 {
    sha: any;
    url: any;
}
export interface object_114 {
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
export interface object_115 {
    latest_comment_url: any;
    title: any;
    type: any;
    url: any;
}
export interface object_116 {
    code: any;
    field: any;
    resource: any;
}
export interface object_117 {
    'delete_this_file.txt': any;
    'file1.txt': object_118;
    'new_file.txt': object_119;
    'old_name.txt': object_120;
}
export interface object_118 {
    content: any;
}
export interface object_119 {
    content: any;
}
export interface object_120 {
    content: any;
    filename: any;
}
export interface object_121 {
    'file1.txt': object_122;
}
export interface object_122 {
    content: any;
}
export interface object_123 {
    comments: object_124;
    html: object_125;
    review_comments: object_126;
    self: object_127;
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
    user: object_129;
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
    user: object_131;
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
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_134 {
    _links: object_135;
    base: object_140;
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
    head: object_142;
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
    user: object_144;
}
export interface object_135 {
    comments: object_136;
    html: object_137;
    review_comments: object_138;
    self: object_139;
}
export interface object_136 {
    href: any;
}
export interface object_137 {
    href: any;
}
export interface object_138 {
    href: any;
}
export interface object_139 {
    href: any;
}
export interface object_140 {
    label: any;
    ref: any;
    repo: repo;
    sha: any;
    user: object_141;
}
export interface object_141 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_142 {
    label: any;
    ref: any;
    repo: repo;
    sha: any;
    user: object_143;
}
export interface object_143 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_144 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_145 {
    html: object_146;
    pull_request: object_147;
    self: object_148;
}
export interface object_146 {
    href: any;
}
export interface object_147 {
    href: any;
}
export interface object_148 {
    href: any;
}
export interface object_149 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_150 {
    _links: object_151;
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
    user: object_155;
}
export interface object_151 {
    html: object_152;
    pull_request: object_153;
    self: object_154;
}
export interface object_152 {
    href: any;
}
export interface object_153 {
    href: any;
}
export interface object_154 {
    href: any;
}
export interface object_155 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_156 {
}
export interface object_157 {
    limit: any;
    remaining: any;
    reset: any;
}
export interface object_158 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    created_at: any;
    creator: object_159;
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
export interface object_159 {
    avatar_url: any;
    gravatar_id: any;
    id: any;
    login: any;
    url: any;
}
export interface object_160 {
    commit_url: any;
    name: any;
    repository_url: any;
    sha: any;
    state: any;
    statuses: any;
}
export interface object_161 {
    context: any;
    created_at: any;
    description: any;
    id: any;
    state: any;
    target_url: any;
    updated_at: any;
    url: any;
}
export interface object_162 {
    object: object_163;
    ref: any;
    url: any;
}
export interface object_163 {
    sha: any;
    type: any;
    url: any;
}
export interface object_164 {
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
export interface object_165 {
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
export interface object_166 {
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
export interface object_167 {
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
export interface object_168 {
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
export interface object_169 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_170 {
    /**
     * @description ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
     */
    date: any;
    email: any;
    name: any;
}
export interface object_171 {
    sha: any;
    url: any;
}
export interface object_172 {
    sha: any;
    url: any;
}
export interface object_173 {
    date: any;
    email: any;
    name: any;
}
export interface object_174 {
    git_url: any;
    html_url: any;
    name: any;
    path: any;
    repository: object_175;
    score: any;
    sha: any;
    url: any;
}
export interface object_175 {
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
export interface object_176 {
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
    pull_request: object_178;
    score: any;
    state: any;
    title: any;
    updated_at: any;
    url: any;
    user: user;
}
export interface object_177 {
    color: any;
    name: any;
    url: any;
}
export interface object_178 {
    diff_url: any;
    html_url: any;
    patch_url: any;
}
export interface object_179 {
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
export interface object_180 {
    sha: any;
    /**
     * @description String of the type of the tagged object. Normally this is a commit but it can also be a tree or a blob.
     */
    type: any;
    url: any;
}
export interface object_181 {
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
export interface object_182 {
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
export interface object_183 {
    id: any;
    name: any;
    url: any;
}
export interface object_184 {
    id: any;
    members_count: any;
    name: any;
    organization: object_185;
    permission: any;
    repos_count: any;
    url: any;
}
export interface object_185 {
    avatar_url: any;
    id: any;
    login: any;
    url: any;
}
export interface object_186 {
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
