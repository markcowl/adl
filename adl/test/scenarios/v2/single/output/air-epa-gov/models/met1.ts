import { met2 } from './met2';
/**
 * @description Results Object
 */
export interface met1 {
    /**
     * @description Field to record messages (typically performance-related) about packet processing
     */
    Message?: string;
    ResultColumns: Array<met2>;
}
