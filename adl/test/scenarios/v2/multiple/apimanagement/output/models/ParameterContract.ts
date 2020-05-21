
/**
 * @description Operation parameters details.
 */
export interface ParameterContract {
    /**
     * @description Parameter name.
     */
    name?: string;
    /**
     * @description Parameter description.
     */
    description: string;
    /**
     * @description Parameter type.
     */
    type?: string;
    /**
     * @description Default parameter value.
     */
    defaultValue: string;
    /**
     * @description Specifies whether parameter is required or not.
     */
    required: boolean;
    /**
     * @description Parameter values.
     */
    values: Array<string>;
}
