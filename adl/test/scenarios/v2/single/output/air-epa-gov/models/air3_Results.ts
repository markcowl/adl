import { air1_ClusterOutput } from './air1_ClusterOutput';
import { air3_Facilities } from './air3_Facilities';
import { qp0 } from './qp0';
/** @since 0.0.0 */
export interface air3_Results {
    /** @since 0.0.0 */
    BadSystemIDs?: string;
    /** @since 0.0.0 */
    CVRows?: string;
    /**
     * @since 0.0.0
     */
    ClusterOutput: air1_ClusterOutput;
    /** @since 0.0.0 */
    ClusterRecords: string;
    /** @since 0.0.0 */
    FEARows?: string;
    /** @since 0.0.0 */
    Facilities: Array<air3_Facilities>;
    /** @since 0.0.0 */
    INSPRows?: string;
    /** @since 0.0.0 */
    IconBaseURL?: string;
    /** @since 0.0.0 */
    IndianCountryRows?: string;
    /** @since 0.0.0 */
    InfFEARows?: string;
    /** @since 0.0.0 */
    Message?: string;
    /** @since 0.0.0 */
    PopUpBaseURL?: string;
    /** @since 0.0.0 */
    QueryID?: string;
    /** @since 0.0.0 */
    QueryParameters?: Array<qp0>;
    /** @since 0.0.0 */
    QueryRows?: string;
    /** @since 0.0.0 */
    SVRows?: string;
    /** @since 0.0.0 */
    ServiceBaseURL?: string;
    /** @since 0.0.0 */
    TotalPenalties?: string;
    /** @since 0.0.0 */
    V3Rows?: string;
}
