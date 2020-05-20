
/**
 * @description Represent a Poll attached to a Tweet
 */
export interface Poll {
    duration_minutes: int64;
    end_datetime: dateTime;
    id?: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
    options?: unknown /*= (not tsschema -- undefinedoptions/undefined ) =*/;
    voting_status: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}
