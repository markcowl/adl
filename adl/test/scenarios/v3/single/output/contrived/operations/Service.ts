import { BodyOfThing } from "../aliases/BodyOfThing";
import { NumericHeader } from "../aliases/NumericHeader";
export interface Service {
    /**
     * @since 1.0.0
     * @http POST /thing
     * @return 200 - OK
     */
    addThing(body: BodyOfThing): [(code: 200) => {
        headers: [NumericHeader<"reuse-header-1">, NumericHeader<"reuse-header-2">];
    }];
}
