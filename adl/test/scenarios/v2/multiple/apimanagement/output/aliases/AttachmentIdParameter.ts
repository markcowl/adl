
/** Attachment identifier within an Issue. Must be unique in the current Issue. */
export type AttachmentIdParameter = Path<string & MaxLength<256> & MinLength<1> & RegularExpression<'^[^*#&+:<>?]+$'>, "attachmentId">;
