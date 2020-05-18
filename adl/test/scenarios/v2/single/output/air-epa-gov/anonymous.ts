import { air2_Results } from './models/air2_Results';
import { air3_Results } from './models/air3_Results';
import { air4_MapOutput } from './models/air4_MapOutput';
import { air5_Results } from './models/air5_Results';
import { met1 } from './models/met1';
/**
 * @description Root Object
 */
export interface object_0 {
    Results?: air2_Results;
}
/**
 * @description Root Object
 */
export interface object_1 {
    Results?: air2_Results;
}
/**
 * @description Root Object
 */
export interface object_2 {
    Results?: air3_Results;
}
/**
 * @description Root Object
 */
export interface object_3 {
    Results?: air3_Results;
}
/**
 * @description GeoJSON Feature Collection Object
 */
export interface object_4 {
    /**
     * @description Array of features in the feature collection.
     */
    features?: any;
    /**
     * @description Static marker indicating object is a GeoJSON Feature Collection.
     */
    type?: any;
}
/**
 * @description GeoJSON Feature Collection Object
 */
export interface object_5 {
    /**
     * @description Array of features in the feature collection.
     */
    features?: any;
    /**
     * @description Static marker indicating object is a GeoJSON Feature Collection.
     */
    type?: any;
}
/**
 * @description Root Object
 */
export interface object_6 {
    MapOutput?: air4_MapOutput;
}
/**
 * @description Root Object
 */
export interface object_7 {
    MapOutput?: air4_MapOutput;
}
/**
 * @description Root Object
 */
export interface object_8 {
    Results?: air5_Results;
}
/**
 * @description Root Object
 */
export interface object_9 {
    Results?: air5_Results;
}
/**
 * @description Root Object
 */
export interface object_10 {
    Results?: met1;
}
/**
 * @description Root Object
 */
export interface object_11 {
    Results?: met1;
}
