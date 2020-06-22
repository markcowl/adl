export interface Service {
    /**
     * @since 1.0.0
     * @http POST /thing
     * @return 200| - OK
     */
    addThing(body: BodyOfThing<"application/json" | "application/xml">): [(code: 200) => {}];
}
