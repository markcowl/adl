import { SamplingType } from '../enums/SamplingType';
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
    percentage: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
