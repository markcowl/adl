
/** @since 2018-11-25 */
export interface Tag {
    /** @since 2018-11-25 */
    Key?: string & MaxLength<128> & MinLength<1>;
    /** @since 2018-11-25 */
    Value?: string & MaxLength<256> & MinLength<0>;
}
