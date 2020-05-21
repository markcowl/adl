
/**
 * @description Controls type of text search performed on facility name with parameter p_fn.
 * - EXACT = Find facilities having the exact provided name(s).
 * - BEGINS = Find facilities with names starting with the provided term(s).
 * - ALL = Find facilities using Oracle text search terms.
 * - CONTAINS =
 */
export enum enum_638 {
    ALL = 'ALL',
    CONTAINS = 'CONTAINS',
    EXACT = 'EXACT',
    BEGINS = 'BEGINS'
}
