
/** A comma separated list of Media fields to display. */
export type MediaFieldsParameter = Query<Array<"media_key" | "duration_ms" | "height" | "preview_image_url" | "type" | "url" | "width"> & MinimumElements<1> & UniqueElements, "media.fields">;
