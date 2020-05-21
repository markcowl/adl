export interface Notification {
    /**
     * @description Text below title on the expanded notification.
     */
    body: string;
    /**
     * @description Platform-specific, used to group notifications together.
     */
    collapseKey: string;
    /**
     * @description Platform-specific icon for the notification.
     */
    icon: string;
    /**
     * @description Platform-specific sound for the notification.
     */
    sound: string;
    /**
     * @description Title to display at the notification.
     */
    title: string;
}
