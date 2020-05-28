
/**
 * @description This contains the list of the fields that are common to all media returned.
 * @since 2.3
 */
export interface CommonMediaFields {
    /**
     * @since 2.3
     */
    height: int64 & Minimum<0>;
    /**
     * @since 2.3
     */
    media_key: string & RegularExpression<"^([0-9]+)_([0-9]+)$">;
    /**
     * @since 2.3
     */
    width: int64 & Minimum<0>;
}
