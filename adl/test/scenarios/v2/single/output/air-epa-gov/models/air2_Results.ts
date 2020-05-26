import { air2_Facilities } from './air2_Facilities';
import { air2_MapOutput } from './air2_MapOutput';
/** @since 0.0.0 */
export interface air2_Results {
    /** @since 0.0.0 */
    BadSystemIDs?: string;
    /** @since 0.0.0 */
    CVRows?: string;
    /** @since 0.0.0 */
    FEARows?: string;
    /** @since 0.0.0 */
    Facilities: Array<air2_Facilities>;
    /** @since 0.0.0 */
    INSPRows?: string;
    /** @since 0.0.0 */
    IndianCountryRows?: string;
    /** @since 0.0.0 */
    InfFEARows?: string;
    /**
     * @since 0.0.0
     */
    MapOutput: air2_MapOutput;
    /** @since 0.0.0 */
    Message?: string;
    /** @since 0.0.0 */
    PageNo?: string;
    /** @since 0.0.0 */
    QueryID?: string;
    /** @since 0.0.0 */
    QueryRows?: string;
    /** @since 0.0.0 */
    SVRows?: string;
    /** @since 0.0.0 */
    TotalPenalties?: string;
    /** @since 0.0.0 */
    V3Rows?: string;
}
