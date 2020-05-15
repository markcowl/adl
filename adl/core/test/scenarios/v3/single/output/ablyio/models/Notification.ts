export interface Notification {
    /**
     * 
     * @description Text below title on the expanded notification.
     */
    body: any;
    /**
     * 
     * @description Platform-specific, used to group notifications together.
     */
    collapseKey: any;
    /**
     * 
     * @description Platform-specific icon for the notification.
     */
    icon: any;
    /**
     * 
     * @description Platform-specific sound for the notification.
     */
    sound: any;
    /**
     * 
     * @description Title to display at the notification.
     */
    title: any;
}
