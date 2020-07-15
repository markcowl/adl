import { BodyOfThing } from "../aliases/BodyOfThing";
import { StringResponse } from "../aliases/StringResponse";
export interface Service {
    /**
     * @since 1.0.0
     * @http POST /thing
     * @return 404 - Not found
     */
    addThing(body: BodyOfThing<"application/json" | "application/xml">): [StringResponse<"200", false, "application/json" | "aplication/xml">, (code: 404, mediaType: "application/json" | "aplication/xml") => {
        isException: true;
    }];
}
