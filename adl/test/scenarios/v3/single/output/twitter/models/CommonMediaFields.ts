
/**
 * @description This contains the list of the fields that are common to all media returned.
 */
export interface CommonMediaFields {
    height: int64 & Minimum<0>;
    media_key: string & RegularExpression<"^([0-9]+)_([0-9]+)$">;
    width: int64 & Minimum<0>;
}
