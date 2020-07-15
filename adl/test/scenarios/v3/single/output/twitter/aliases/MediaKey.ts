
/**
 *
 * @description The Media Key identifier for this attachment.
 */
export type MediaKey = string & RegularExpression<"^([0-9]+)_([0-9]+)$">;
