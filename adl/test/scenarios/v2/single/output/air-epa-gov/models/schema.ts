import { air2_Results } from './air2_Results';
import { air3_Results } from './air3_Results';
import { air6_Feature } from './air6_Feature';
import { air4_MapOutput } from './air4_MapOutput';
import { air5_Results } from './air5_Results';
import { met1 } from './met1';
/**
 * @description Root Object
 * @since 0.0.0
 */
export interface schema {
    /**
     *
     * @since 0.0.0
     */
    Results: air2_Results;
}
/**
 * @description Root Object
 * @since 0.0.0
 */
export interface schema {
    /**
     *
     * @since 0.0.0
     */
    Results: air2_Results;
}
/**
 * @description Root Object
 * @since 0.0.0
 */
export interface schema {
    /**
     *
     * @since 0.0.0
     */
    Results: air3_Results;
}
/**
 * @description Root Object
 * @since 0.0.0
 */
export interface schema {
    /**
     *
     * @since 0.0.0
     */
    Results: air3_Results;
}
/**
 * @description GeoJSON Feature Collection Object
 * @since 0.0.0
 */
export interface schema {
    /**
     * Features Array
     * @description Array of features in the feature collection.
     * @since 0.0.0
     */
    features: Array<air6_Feature>;
    /**
     * Feature Collection
     * @description Static marker indicating object is a GeoJSON Feature Collection.
     * @since 0.0.0
     */
    type: string;
}
/**
 * @description GeoJSON Feature Collection Object
 * @since 0.0.0
 */
export interface schema {
    /**
     * Features Array
     * @description Array of features in the feature collection.
     * @since 0.0.0
     */
    features: Array<air6_Feature>;
    /**
     * Feature Collection
     * @description Static marker indicating object is a GeoJSON Feature Collection.
     * @since 0.0.0
     */
    type: string;
}
/**
 * @description Root Object
 * @since 0.0.0
 */
export interface schema {
    /**
     *
     * @since 0.0.0
     */
    MapOutput: air4_MapOutput;
}
/**
 * @description Root Object
 * @since 0.0.0
 */
export interface schema {
    /**
     *
     * @since 0.0.0
     */
    MapOutput: air4_MapOutput;
}
/**
 * @description Root Object
 * @since 0.0.0
 */
export interface schema {
    /**
     *
     * @since 0.0.0
     */
    Results: air5_Results;
}
/**
 * @description Root Object
 * @since 0.0.0
 */
export interface schema {
    /**
     *
     * @since 0.0.0
     */
    Results: air5_Results;
}
/**
 * @description Root Object
 * @since 0.0.0
 */
export interface schema {
    /**
     *
     * @since 0.0.0
     */
    Results: met1;
}
/**
 * @description Root Object
 * @since 0.0.0
 */
export interface schema {
    /**
     *
     * @since 0.0.0
     */
    Results: met1;
}
