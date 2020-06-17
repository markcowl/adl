
/** Links to related resources, in the format defined by [RFC 5988](https://tools.ietf.org/html/rfc5988#section-5). This will potentially include a link with relation type `next`, `first`, and `current`, where appropiate. */
export type Link = Header<string & RegularExpression<'(<(.*)?>; rel=\"(first|current|last)?\",)*(<(.*)?>; rel=\"(first|current|last)?\")+'>, "link">;
