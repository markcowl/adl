export interface deployment {
    description: string;
    payload: {
        deploy_user: string;
        environment: string;
        room_id: double;
    };
    ref: string;
}
