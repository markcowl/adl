
/**
 * @description Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
 * - Z = Zero quarters in significant noncompliance.
 * - GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.
 * - GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.
 */
export enum enum_559 {
    GT1 = 'GT1',
    GE1 = 'GE1',
    GT2 = 'GT2',
    GE2 = 'GE2',
    GT4 = 'GT4',
    GE4 = 'GE4',
    GT8 = 'GT8',
    GE8 = 'GE8',
    GT12 = 'GT12',
    GE12 = 'GE12'
}
