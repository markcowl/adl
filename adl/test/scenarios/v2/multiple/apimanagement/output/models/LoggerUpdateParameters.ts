import { LoggerType } from '../enums/LoggerType';
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
    description: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Logger credentials.
     */
    credentials: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    /**
     * @description Whether records are buffered in the logger before publishing. Default is assumed to be true.
     */
    isBuffered: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
