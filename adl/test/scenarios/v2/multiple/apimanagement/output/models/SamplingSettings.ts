
/** @since 2019-12-01 */
export interface SamplingSettings {
    /** @since 2019-12-01 */
    samplingType: SamplingType;
    /** @since 2019-12-01 */
    percentage: double & Minimum<0> & Maximum<100>;
}
