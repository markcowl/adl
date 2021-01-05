
/** A comma separated list of Place fields to display. */
export type PlaceFieldsParameter = Query<Array<"id" | "name" | "country_code" | "place_type" | "full_name" | "country" | "contained_within" | "geo"> & MinimumElements<1> & UniqueElements, "place.fields">;
