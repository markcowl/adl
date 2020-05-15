import { ErrorResponseBody } from './ErrorResponseBody';
/**
 * 
 * @description Operation Result.
 */
export interface OperationResultContract {
    /**
     * 
     * @description Operation result identifier.
     */
    id: any;
    /**
     * 
     * @description Status of an async operation.
     */
    status: AsyncOperationStatus;
    /**
     * 
     * @description Start time of an async operation. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    started: any;
    /**
     * 
     * @description Last update time of an async operation. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    updated: any;
    /**
     * 
     * @description Optional result info.
     */
    resultInfo: any;
    /**
     * 
     * @description Error Body Contract
     */
    error: ErrorResponseBody;
    /**
     * 
     * @description This property if only provided as part of the TenantConfiguration_Validate operation. It contains the log the entities which will be updated/created/deleted as part of the TenantConfiguration_Deploy operation.
     */
    readonly actionLog: any;
}
