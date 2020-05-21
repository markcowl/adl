
/**
 * @description Sampling settings for Diagnostic.
 */
export interface SamplingSettings {
    /**
     * @description Sampling type.
     */
    samplingType: SamplingType;
    /**
     * @description Rate of sampling for fixed-rate sampling.
     */
    percentage: double & Minimum<0> & Maximum<100>;
}
