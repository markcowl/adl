import { Observation } from './Observation';
/**
 * @description Describes observations related to the problem.
 */
export interface RelatedObservations {
    /**
     * @description The list of observations related to the problem.
     */
    ObservationList: Array<Observation>;
}
