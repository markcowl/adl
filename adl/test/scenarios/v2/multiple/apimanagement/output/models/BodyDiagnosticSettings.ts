
/**
 * @description Body logging settings.
 */
export interface BodyDiagnosticSettings {
    /**
     * @description Number of request body bytes to log.
     */
    bytes: int32 & Maximum<8192>;
}
