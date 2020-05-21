import { air1_ClusterData } from './air1_ClusterData';
/**
 * @description Cluster Output Object
 */
export interface air1_ClusterOutput {
    /**
     * @description An array of state, county, or zip code cluster information
     */
    ClusterData: Array<air1_ClusterData>;
}
