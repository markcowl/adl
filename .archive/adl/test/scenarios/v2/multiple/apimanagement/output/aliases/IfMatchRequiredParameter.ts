
/** ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. */
export type IfMatchRequiredParameter = Header<string, "If-Match">;
