export interface feeds {
    _links: {
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
    };
    current_user_actor_url: string;
    current_user_organization_url: string;
    current_user_public: string;
    current_user_url: string;
    timeline_url: string;
    user_url: string;
}
