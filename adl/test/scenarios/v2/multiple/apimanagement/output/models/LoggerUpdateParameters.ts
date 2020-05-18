
/**
 * @description Parameters supplied to the Update Logger operation.
 */
export interface LoggerUpdateParameters {
    /**
     * @description Logger type.
     */
    loggerType: LoggerType;
    /**
     * @description Logger description.
     */
    description: any;
    /**
     * @description Logger credentials.
     */
    credentials: any;
    /**
     * @description Whether records are buffered in the logger before publishing. Default is assumed to be true.
     */
    isBuffered: any;
}
