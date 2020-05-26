
/** @since 2.3 */
export interface Point {
    /**
     * @since 2.3
     */
    coordinates?: Array<double> & MaximumElements<2> & MinimumElements<2>;
    /**
     * @since 2.3
     */
    type?: "Point";
}
