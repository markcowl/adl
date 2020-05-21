import { ErrorResponseBody } from './ErrorResponseBody';
import { OperationResultLogItemContract } from './OperationResultLogItemContract';
/**
 * @description Operation Result.
 */
export interface OperationResultContract {
    /**
     * @description Operation result identifier.
     */
    id: string;
    /**
     * @description Status of an async operation.
     */
    status: AsyncOperationStatus;
    /**
     * @description Start time of an async operation. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    started: dateTime;
    /**
     * @description Last update time of an async operation. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     *
     */
    updated: dateTime;
    /**
     * @description Optional result info.
     */
    resultInfo: string;
    /**
     * @description Error Body Contract
     */
    error: ErrorResponseBody;
    /**
     * @description This property if only provided as part of the TenantConfiguration_Validate operation. It contains the log the entities which will be updated/created/deleted as part of the TenantConfiguration_Deploy operation.
     */
    readonly actionLog: Array<OperationResultLogItemContract> & ;
}
