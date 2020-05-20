export interface Notification {
    /**
     * @description Text below title on the expanded notification.
     */
    body: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Platform-specific, used to group notifications together.
     */
    collapseKey: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Platform-specific icon for the notification.
     */
    icon: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Platform-specific sound for the notification.
     */
    sound: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Title to display at the notification.
     */
    title: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
