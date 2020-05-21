import { air1_MapData } from './air1_MapData';
/**
 * @description Map Output Object
 */
export interface air4_MapOutput {
    /**
     * @description URL where all the icons are located
     */
    IconBaseURL?: string;
    /**
     * @description An array of facility geospatial information.
     */
    MapData?: Array<air1_MapData>;
    /**
     * @description Combine this URL with the PUC to get popup info
     */
    PopUpBaseURL?: string;
    /**
     * @description Sequential number assigned to entire search result
     */
    QueryID?: string;
}
